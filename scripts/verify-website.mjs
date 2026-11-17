import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = process.argv[2] || 'http://localhost:3010';
async function files(directory) {
  const entries = await fs.readdir(directory,{withFileTypes:true});
  const groups = await Promise.all(entries.map(entry => entry.isDirectory() ? files(path.join(directory,entry.name)) : [path.join(directory,entry.name)]));
  return groups.flat();
}
const app = 'apps/web/app';
const routes = (await files(app)).filter(file=>file.endsWith('page.tsx') && !file.includes('[')).map(file=>'/' + path.relative(app,path.dirname(file)).replaceAll('\\','/')).map(route=>route==='/. '?'/':route);
const components = (await files('apps/web/components/storefront')).filter(file=>file.endsWith('.tsx'));
const assets = new Set();
for (const file of components) {
  const source = await fs.readFile(file,'utf8');
  assert.ok(!source.includes('dangerouslySetInnerHTML'),`HTML injection in ${file}`);
  for (const match of source.matchAll(/\/toyshutch\/[a-zA-Z0-9_.-]+/g)) assets.add(match[0]);
}
for (const asset of assets) await fs.access('apps/web/public'+asset);
let checked=0;
for (let i=0;i<routes.length;i+=3) {
  await Promise.all(routes.slice(i,i+3).map(async route=> {
    const response=await fetch(root+route);
    assert.equal(response.status,200,`HTTP ${route}`);
    const html=await response.text();
    assert.ok(html.includes('sep-header'),`Missing header ${route}`);
    assert.ok(html.includes('toyshutch-footer'),`Missing footer ${route}`);
    assert.ok(html.includes('<main'),`Missing page content ${route}`);
    checked++;
  }));
}
for (const route of ['/collections/all?view=sale','/collections/teddy-bears?view=category','/blogs/news?page=2','/search?q=panda']) {
  assert.equal((await fetch(root+route)).status,200,route);
}
assert.equal((await fetch(root+'/products/not-a-real-product')).status,404);
console.log(`Verified ${checked} explicit React routes, query views, ${assets.size} local assets and 404 behavior.`);
