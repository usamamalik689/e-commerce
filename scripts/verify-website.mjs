import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { products } from '../apps/web/data/products.ts';
import { collections } from '../apps/web/data/collections.ts';
import { articles } from '../apps/web/data/articles.ts';
import { policies } from '../apps/web/data/policies.ts';
const root=process.argv[2]||'http://localhost:3010';
const routes=['/','/pages/collections','/collections','/blogs/news','/pages/about-us','/pages/contact','/pages/frequently-asked-questions','/pages/wishlist','/cart','/checkout','/search',...products.map(p=>'/products/'+p.slug),...collections.map(c=>'/collections/'+c.slug),...articles.map(a=>'/blogs/news/'+a.slug),...policies.map(p=>'/pages/'+p.slug)];
async function files(directory){const entries=await fs.readdir(directory,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?files(path.join(directory,e.name)):[path.join(directory,e.name)]))).flat();}
const assets=new Set();
for(const directory of ['apps/web/features','apps/web/components/layout','apps/web/components/shared','apps/web/data'])for(const file of await files(directory)){
 const source=await fs.readFile(file,'utf8');assert.ok(!source.includes('dangerouslySetInnerHTML'),file);
 for(const match of source.matchAll(/\/toyshutch\/[a-zA-Z0-9_.-]+/g))assets.add(match[0]);
}
for(const asset of assets)await fs.access('apps/web/public'+asset);
for(let i=0;i<routes.length;i+=3)await Promise.all(routes.slice(i,i+3).map(async route=>{const response=await fetch(root+route);assert.equal(response.status,200,route);const html=await response.text();assert.ok(html.includes('sep-header'),route);assert.ok(html.includes('toyshutch-footer'),route);assert.ok(html.includes('<main'),route);}));
for(const route of ['/collections/all?view=sale','/collections/teddy-bears?view=category','/search?q=panda'])assert.equal((await fetch(root+route)).status,200,route);
for(const route of ['/products/not-a-real-product','/collections/not-a-collection','/blogs/news/not-an-article','/pages/not-a-page'])assert.equal((await fetch(root+route)).status,404,route);
const [one,two]=await Promise.all(products.slice(0,2).map(async p=>(await fetch(root+'/products/'+p.slug)).text()));assert.notEqual(one,two,'Product slugs must render their own data');
console.log(`Verified ${routes.length} routes from shared templates, ${assets.size} local assets, query views and unknown-slug 404s.`);
