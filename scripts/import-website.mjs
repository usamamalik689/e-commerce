import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const origin = 'https://toyshutch.pk';
const publicDir = path.resolve('apps/web/public/toyshutch');
const contentDir = path.resolve('apps/web/content/pages');
const cacheDir = path.resolve('.reference-cache');
for (const dir of [publicDir, contentDir, cacheDir]) await fs.mkdir(dir, { recursive: true });
const hash = value => crypto.createHash('sha256').update(value).digest('hex').slice(0, 16);
const pending = new Map();
const failures = [];
async function get(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return Buffer.from(await response.arrayBuffer());
    } catch (error) { if (attempt === 2) throw error; }
  }
}
async function asset(raw, base = origin) {
  if (/^(data:|#|blob:)/.test(raw)) return raw;
  const url = new URL(raw.replaceAll('&amp;', '&'), base).href;
  if (pending.has(url)) return pending.get(url);
  const work = (async () => {
    const filename = hash(url) + (path.extname(new URL(url).pathname) || '.bin');
    try { await fs.access(path.join(publicDir, filename)); return '/toyshutch/' + filename; } catch {}
    try { await fs.writeFile(path.join(publicDir, filename), await get(url)); return '/toyshutch/' + filename; }
    catch (error) {
      if (url.includes('baloo2-') && url.includes('.woff2')) return asset(url.replace('.woff2', '.ttf').replace('?v=3478', ''));
      failures.push(String(error)); return '';
    }
  })();
  pending.set(url, work);
  return work;
}
async function cssAssets(css, base) {
  for (const match of [...css.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)]) {
    if (/^(data:|#)/.test(match[1])) continue;
    const local = await asset(match[1], base);
    css = css.replaceAll(match[0], `url("${local}")`).replaceAll(`url("${local}") format("woff2")`, `url("${local}")`);
  }
  return css.replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
}
const cssCache = new Map();
async function stylesheet(url) {
  if (!cssCache.has(url)) cssCache.set(url, (async () => cssAssets((await get(url)).toString(), url))());
  return cssCache.get(url);
}
const decode = text => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const queue = new Set(['/']);
const sitemap = (await get(origin + '/sitemap.xml')).toString();
for (const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  if (match[1].includes('agentic')) continue;
  const xml = (await get(decode(match[1]))).toString();
  for (const loc of xml.matchAll(/<loc>(.*?)<\/loc>/g)) queue.add(new URL(decode(loc[1])).pathname);
}
for (const route of ['/collections', '/pages/wishlist', '/cart', '/search']) queue.add(route);
let manifest = {};
let products = [];
try { manifest = JSON.parse(await fs.readFile('apps/web/content/routes.json', 'utf8')); } catch {}
try { products = JSON.parse(await fs.readFile('apps/web/content/products.json', 'utf8')); } catch {}
for (const entry of Object.values(manifest)) {
  const existing = JSON.parse(await fs.readFile(path.join(contentDir, entry.file), 'utf8'));
  enqueueLinks(existing.html);
  for (const match of existing.html.matchAll(/href="(\/products\/[^"?#]+)"/g)) queue.add(match[1]);
}
function enqueueLinks(source) {
  for (const match of source.matchAll(/href="([^"#]+)"/g)) {
    try {
      const url = new URL(decode(match[1]), origin);
      if (url.origin !== origin || !/^\/(collections|pages|blogs|policies)(\/|$)/.test(url.pathname)) continue;
      if (/\.(atom|oembed)$/.test(url.pathname)) continue;
      // Capture visible pagination and custom collection layouts. Filter and sort
      // combinations are applied locally to the complete imported collection.
      const query = new URLSearchParams();
      for (const key of ['view', 'page']) if (url.searchParams.has(key)) query.set(key, url.searchParams.get(key));
      if (query.get('view') === 'details') continue;
      queue.add(url.pathname + (query.size ? '?' + query.toString() : ''));
    } catch {}
  }
}
let completed = Object.keys(manifest).length;
async function importPage(route) {
  const key = hash(route);
  const cacheFile = path.join(cacheDir, key + '.html');
  let source;
  try { source = await fs.readFile(cacheFile, 'utf8'); }
  catch { source = (await get(origin + route)).toString(); await fs.writeFile(cacheFile, source); }
  if (!source.includes('<!-- BEGIN sections: header-group -->')) throw new Error('Missing storefront: ' + route);
  enqueueLinks(source);
  let html = source.slice(source.indexOf('<!-- BEGIN sections: header-group -->'), source.indexOf('<!-- END sections: footer-group -->'));
  const variants = source.match(/<script[^>]*data-sep-variants[^>]*>([\s\S]*?)<\/script>/)?.[1];
  const structured = [...source.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => { try { return JSON.parse(m[1]); } catch { return null; } });
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '');
  let css = '';
  for (const match of (source.slice(0, source.indexOf('</head>')) + html).matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>|<link\b[^>]*>/gi)) {
    if (match[1] !== undefined) css += '\n' + await cssAssets(match[1], origin);
    else if (/stylesheet/i.test(match[0])) {
      const href = match[0].match(/href=["']([^"']+)/)?.[1];
      if (href && (href.includes('toyshutch.pk') || href.includes('splide'))) css += '\n' + await stylesheet(new URL(decode(href), origin).href);
    }
  }
  html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>|<link\b[^>]*>/gi, '').replace(/\s(?:on\w+|srcset|action|data-reviews|data-widget-data)=(?:"[^"]*"|'[^']*')/gi, '');
  const media = [...html.matchAll(/\b(src|poster|data-product-image|data-src)="([^"]+)"/g)];
  const replacements = new Map();
  for (let i = 0; i < media.length; i += 5) await Promise.all(media.slice(i, i + 5).map(async ([full, attr, url]) => {
    if (/^(data:|#)/.test(url)) return;
    replacements.set(full, `${attr}="${await asset(url)}"`);
  }));
  for (const [from, to] of replacements) html = html.replaceAll(from, to);
  html = html.replace(/href="https?:\/\/toyshutch\.pk([^" ]*)"/g, 'href="$1"');
  const title = decode(source.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() || 'Toys Hutch');
  const cssName = 'page-' + hash(css) + '.css';
  await fs.writeFile(path.join(publicDir, cssName), css);
  const page = { route, title, html, css: '/toyshutch/' + cssName, variants: variants ? JSON.parse(variants) : [], structured };
  await fs.writeFile(path.join(contentDir, key + '.json'), JSON.stringify(page));
  manifest[route] = { file: key + '.json', title };
  if (route.startsWith('/products/')) {
    const product = structured.find(s => s?.['@type'] === 'Product');
    products.push({ route, title: product?.name || title.split(' – ')[0], image: html.match(/class="sep-pdp__slide[^]*?<img[^>]*src="([^"]+)"/)?.[1] || '', variants: page.variants });
  }
  console.log(`[${++completed}/${queue.size}] ${route}`);
}
const done = new Set(Object.keys(manifest));
while ([...queue].some(route => !done.has(route))) {
  const batch = [...queue].filter(route => !done.has(route)).slice(0, 3);
  batch.forEach(route => done.add(route));
  const results = await Promise.allSettled(batch.map(importPage));
  results.forEach((result, i) => { if (result.status === 'rejected') failures.push(`${batch[i]}: ${result.reason}`); });
  await fs.writeFile('apps/web/content/routes.json', JSON.stringify(manifest, null, 2));
}
await fs.writeFile('apps/web/content/products.json', JSON.stringify(products));
await fs.writeFile('apps/web/content/import-report.json', JSON.stringify({ pages: completed, assets: pending.size, failures }, null, 2));
console.log(`Finished: ${completed} pages; ${pending.size} assets; ${failures.length} failures.`);
