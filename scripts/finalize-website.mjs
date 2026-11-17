import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const directory = 'apps/web/content';
const manifest = JSON.parse(await fs.readFile(directory + '/routes.json', 'utf8'));
const catalog = new Map();
const collections = {};
const links = new Set();
const reviewAssets = new Map();
async function localReviewImage(raw) {
  const url = raw.replaceAll('&amp;', '&');
  if (!reviewAssets.has(url)) reviewAssets.set(url, (async () => {
    const name = crypto.createHash('sha256').update(url).digest('hex').slice(0, 16) + new URL(url).pathname.match(/\.[a-z0-9]+$/i)[0];
    try { await fs.access('apps/web/public/toyshutch/' + name); }
    catch {
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`Review image: ${response.status} ${url}`);
      await fs.writeFile('apps/web/public/toyshutch/' + name, Buffer.from(await response.arrayBuffer()));
    }
    return '/toyshutch/' + name;
  })());
  return reviewAssets.get(url);
}
for (const [route, entry] of Object.entries(manifest)) {
  const filename = directory + '/pages/' + entry.file;
  const page = JSON.parse(await fs.readFile(filename, 'utf8'));
  for (const match of [...page.html.matchAll(/\b(?:src|poster)=["'](https:\/\/review-images\.judgeme\.com\/[^"']+)["']/g)]) page.html = page.html.replaceAll(match[1], await localReviewImage(match[1]));
  page.html = page.html.replace(/href="\/collections\/[^/"?]+\/products\//g, 'href="/products/');
  for (const match of page.html.matchAll(/<article\b[^>]*class="sep-products__card"[^>]*>[\s\S]*?<\/article>/g)) {
    const id = match[0].match(/data-product-id="([^"]+)"/)?.[1];
    if (!id) continue;
    catalog.set(id, match[0]);
  }
  if (route.startsWith('/collections/')) {
    const start = page.html.indexOf('data-sep-grid');
    const html = page.html.slice(start, page.html.indexOf('</main>'));
    const group = route.split('?')[0];
    collections[group] ||= {};
    for (const match of html.matchAll(/<article\b[^>]*class="sep-products__card"[^>]*>[\s\S]*?<\/article>/g)) {
      const id = match[0].match(/data-product-id="([^"]+)"/)?.[1];
      if (id) collections[group][id] = match[0];
    }
  }
  for (const match of page.html.matchAll(/href="(\/[^"#]*)/g)) links.add(match[1].replaceAll('&amp;', '&').split('?')[0]);
  await fs.writeFile(filename, JSON.stringify(page));
}
const home = JSON.parse(await fs.readFile(directory + '/pages/' + manifest['/'].file, 'utf8'));
const wishlistRoute = '/pages/wishlist';
const wishlistFile = crypto.createHash('sha256').update(wishlistRoute).digest('hex').slice(0, 16) + '.json';
const wishlist = { ...home, route: wishlistRoute, title: 'Your Wishlist | Toys Hutch', html: home.html.replace(/<main\b[\s\S]*?<\/main>/, '<main class="store-state-page"><h1>Your Wishlist</h1><p>Your favorite cuddle companions, all in one place.</p><div id="store-state-root"></div></main>') };
await fs.writeFile(directory + '/pages/' + wishlistFile, JSON.stringify(wishlist));
manifest[wishlistRoute] = { file: wishlistFile, title: wishlist.title };
const checkoutFile = crypto.createHash('sha256').update('/checkout').digest('hex').slice(0, 16) + '.json';
await fs.writeFile(directory + '/pages/' + checkoutFile, JSON.stringify({ ...home, route: '/checkout', title: 'Checkout | Toys Hutch', html: home.html.replace(/<main\b[\s\S]*?<\/main>/, '<main class="store-state-page"><h1>Checkout</h1><p>A few details, and you’re one step closer to a cuddle.</p><div id="store-checkout-root"></div></main>') }));
manifest['/checkout'] = { file: checkoutFile, title: 'Checkout | Toys Hutch' };
const cart = JSON.parse(await fs.readFile(directory + '/pages/' + manifest['/cart'].file, 'utf8'));
cart.html = cart.html.replace(/<main\b[\s\S]*?<\/main>/, '<main class="store-state-page"><h1>Your Cart</h1><p>A little happiness, ready to come home.</p><div id="store-state-root"></div></main>');
await fs.writeFile(directory + '/pages/' + manifest['/cart'].file, JSON.stringify(cart));
await fs.writeFile(directory + '/routes.json', JSON.stringify(manifest, null, 2));
await fs.writeFile(directory + '/catalog.json', JSON.stringify([...catalog.values()]));
await fs.writeFile(directory + '/collection-catalog.json', JSON.stringify(Object.fromEntries(Object.entries(collections).map(([route, values]) => [route, Object.values(values)]))));
const missing = [...links].filter(link => !manifest[link] && !/^(\/cdn\/|\/account|\/checkouts|\/checkout|\/cart\/|\/apps\/)/.test(link));
console.log(JSON.stringify({ pages: Object.keys(manifest).length, products: catalog.size, collections: Object.keys(collections).length, missingLinks: missing }, null, 2));
