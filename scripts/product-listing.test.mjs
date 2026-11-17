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
