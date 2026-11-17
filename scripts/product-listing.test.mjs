import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts } from '../apps/web/lib/product-listing.ts';
import { parsePrice } from '../apps/web/lib/money.ts';

const products = [
  { id:'1', title:'Panda', price:4099, available:true },
  { id:'2', title:'Bunny', price:1499, available:false },
  { id:'3', title:'Teddy', price:1999, available:true },
];
test('formatted rupee prices preserve the amount', () => {
  assert.equal(parsePrice('Rs.4,099'),4099);
  assert.equal(parsePrice('Rs.2,235.50'),2235.5);
});
test('price and availability filters combine without changing source products', () => {
  const params=new URLSearchParams('filter.v.price.lte=2999&filter.v.availability=1');
  assert.deepEqual(filterProducts(products,params).map(p=>p.id),['3']);
  assert.deepEqual(products.map(p=>p.id),['1','2','3']);
});
test('zero means out of stock rather than no availability filter', () => {
  assert.deepEqual(filterProducts(products,new URLSearchParams('filter.v.availability=0')).map(p=>p.id),['2']);
});
test('search and sorting work together', () => {
  assert.deepEqual(filterProducts(products,new URLSearchParams('q=  TEDDY  '),true).map(p=>p.id),['3']);
  assert.deepEqual(filterProducts(products,new URLSearchParams('sort_by=price-ascending')).map(p=>p.id),['2','3','1']);
  assert.deepEqual(filterProducts(products,new URLSearchParams('sort_by=title-ascending')).map(p=>p.id),['2','1','3']);
});
test('an empty result is valid and clearing filters restores the listing', () => {
  assert.equal(filterProducts(products,new URLSearchParams('filter.v.price.lte=500')).length,0);
  assert.equal(filterProducts(products,new URLSearchParams()).length,3);
});

import { products as catalogProducts } from '../apps/web/data/products.ts';
import { collections } from '../apps/web/data/collections.ts';
import { articles } from '../apps/web/data/articles.ts';
import { categoryMenu } from '../apps/web/data/navigation.ts';
import { readdir, access } from 'node:fs/promises';
test('all product URLs use one slug route rather than copied page folders', async () => {
  assert.deepEqual(await readdir('apps/web/app/products'), ['[slug]']);
  await access('apps/web/app/collections/[slug]/page.tsx');
  await access('apps/web/app/blogs/news/[slug]/page.tsx');
});
test('catalog slugs are unique and variants have valid prices', () => {
  assert.equal(new Set(catalogProducts.map(p=>p.slug)).size,catalogProducts.length);
  for(const product of catalogProducts) {
    assert.ok(product.title,product.slug);
    assert.ok(product.variants.length,product.slug);
    for(const variant of product.variants) assert.ok(Number.isInteger(variant.price)&&variant.price>=0,product.slug);
  }
});
test('collection and category-menu products resolve to real product data', () => {
  const slugs=new Set(catalogProducts.map(p=>p.slug));
  for(const collection of collections)for(const slug of collection.productSlugs)assert.ok(slugs.has(slug),slug);
  for(const group of categoryMenu)for(const slug of group.productSlugs)assert.ok(slugs.has(slug),slug);
});
test('articles have unique slugs and real content', () => {
  assert.equal(new Set(articles.map(a=>a.slug)).size,articles.length);
  for(const article of articles){assert.ok(article.title,article.slug);assert.ok(article.body.length,article.slug);}
});
