import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { parsePrice } from '../apps/web/lib/money.ts';
assert.equal(parsePrice('Rs.1,499'), 1499);
assert.equal(parsePrice('Rs. 2,364.50'), 2364.5);
assert.equal(parsePrice('Rs.0'), 0);
const manifest = JSON.parse(await fs.readFile('apps/web/content/routes.json', 'utf8'));
const root = process.argv[2] || 'http://localhost:3010';
let checked = 0;
const pages = [];
for (const [route, entry] of Object.entries(manifest)) {
  const page = JSON.parse(await fs.readFile('apps/web/content/pages/' + entry.file, 'utf8'));
  assert.ok(!/<script\b/i.test(page.html), `Remote script in ${route}`);
  assert.ok(!/\son\w+\s*=/i.test(page.html), `Inline event handler in ${route}`);
  assert.ok(page.html.includes('<main'), `Missing main in ${route}`);
  await fs.access('apps/web/public' + page.css);
  for (const match of page.html.matchAll(/(?:src|poster|data-product-image)="(\/toyshutch\/[^"?#]+)"/g)) await fs.access('apps/web/public' + match[1]);
  pages.push(route);
}
for (let i = 0; i < pages.length; i += 4) {
  await Promise.all(pages.slice(i, i + 4).map(async route => {
    const response = await fetch(root + route);
    assert.equal(response.status, 200, `HTTP ${route}`);
    const html = await response.text();
    assert.ok(html.includes('sep-header'), `Header missing at ${route}`);
    assert.ok(html.includes('toyshutch-footer'), `Footer missing at ${route}`);
    checked++;
  }));
}
const filtered = await (await fetch(root + '/collections/all?filter.v.price.lte=1499&sort_by=price-ascending')).text();
assert.ok(filtered.includes('data-local-filtered="true"'), 'Server filters not applied');
const main = filtered.slice(filtered.indexOf('<main'), filtered.indexOf('</main>'));
const prices = [...main.matchAll(/data-product-price="Rs\.([^" ]+)"/g)].map(m => Number(m[1].replaceAll(',', '')));
assert.ok(prices.length > 0, 'Price filter unexpectedly empty');
assert.ok(prices.every(price => price <= 1499), 'Price filter included expensive products');
assert.deepEqual(prices, [...prices].sort((a, b) => a - b), 'Price sorting incorrect');
const search = await (await fetch(root + '/search?q=panda')).text();
assert.ok(search.includes('store-search-page'), 'Search page missing');
assert.ok(search.includes('Panda'), 'Search results missing');
const missing = await fetch(root + '/products/not-a-real-product');
assert.equal(missing.status, 404, 'Unknown product should return 404');
console.log(`Verified ${checked} page views, local assets, no imported scripts, price filters, sorting, search and 404 behavior.`);
