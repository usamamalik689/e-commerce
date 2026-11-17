import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// Import the public homepage's presentation only. No Shopify scripts, tracking,
// checkout actions or remote form submissions are included in the local app.
const root = process.cwd();
const source = await fs.readFile(path.join(root, 'reference-home.html'), 'utf8');
const out = path.join(root, 'apps/web/public/toyshutch');
await fs.mkdir(out, { recursive: true });
const downloaded = new Map();
async function asset(raw) {
  const url = new URL(raw.replaceAll('&amp;', '&'), 'https://toyshutch.pk/').href;
  if (downloaded.has(url)) return downloaded.get(url);
  const promise = (async () => {
    const ext = path.extname(new URL(url).pathname) || '.bin';
    const name = crypto.createHash('sha256').update(url).digest('hex').slice(0, 16) + ext;
    const response = await fetch(url);
    if (!response.ok && new URL(url).pathname.endsWith('.woff2') && url.includes('baloo2-')) {
      return asset(url.replace('.woff2', '.ttf').replace('?v=3478', ''));
    }
    if (!response.ok) throw new Error(`${response.status}: ${url}`);
    await fs.writeFile(path.join(out, name), Buffer.from(await response.arrayBuffer()));
    return '/toyshutch/' + name;
  })();
  downloaded.set(url, promise);
  return promise;
}
async function localizeCss(css, base = 'https://toyshutch.pk/') {
  const matches = [...css.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)];
  for (const match of matches) {
    if (match[1].startsWith('data:') || match[1].startsWith('#')) continue;
    const local = await asset(new URL(match[1], base).href);
    css = css.replaceAll(match[0], `url("${local}")`).replaceAll(`url("${local}") format("woff2")`, `url("${local}")`);
  }
  return css.replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
}
let html = source.slice(source.indexOf('<!-- BEGIN sections: header-group -->'), source.indexOf('<!-- END sections: footer-group -->'));
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '');
const head = source.slice(0, source.indexOf('</head>'));
let css = '';
// Preserve original cascade order: theme variables, base styles, section styles.
for (const match of (head + html).matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>|<link\b[^>]*>/gi)) {
  if (match[1] !== undefined) css += '\n' + await localizeCss(match[1]);
  else if (/stylesheet/i.test(match[0])) {
    const href = match[0].match(/href=["']([^"']+)/)?.[1];
    if (!href || (!href.includes('toyshutch.pk') && !href.includes('splide'))) continue;
    const url = new URL(href.replaceAll('&amp;', '&'), 'https://toyshutch.pk/').href;
    css += '\n' + await localizeCss(await (await fetch(url)).text(), url);
  }
}
html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>|<link\b[^>]*>/gi, '');
html = html.replace(/\s(?:on\w+|srcset|action)=(?:"[^"]*"|'[^']*')/gi, '');
const media = [...html.matchAll(/\b(src|poster|data-product-image)="([^"]+)"/g)];
// Bound concurrency so the reference host is not flooded with downloads.
for (let i = 0; i < media.length; i += 6) {
  await Promise.all(media.slice(i, i + 6).map(async ([full, attr, url]) => {
    if (url.startsWith('data:') || url.startsWith('#')) return;
    html = html.replaceAll(full, `${attr}="${await asset(url)}"`);
  }));
}
html = html.replace(/<a\b([^>]*?)href="\/"/g, '<a$1href="#"');
await fs.writeFile(path.join(root, 'apps/web/content/homepage.json'), JSON.stringify({ html }));
await fs.writeFile(path.join(root, 'apps/web/app/reference.css'), css);
console.log(`Imported homepage, ${downloaded.size} local assets, ${css.length} bytes of CSS.`);
