import 'server-only';
import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import { parsePrice } from './money';

export type Variant = { id: number; title: string; options: string[]; price: number; compare_at_price: number | null; available: boolean };
export type StorePage = { route: string; title: string; html: string; css: string; variants: Variant[] };
const directory = path.join(process.cwd(), 'content');
export const getManifest = cache(async (): Promise<Record<string, { file: string; title: string }>> => JSON.parse(await fs.readFile(path.join(directory, 'routes.json'), 'utf8')));
export const getStorePage = cache(async (route: string, query: string = ''): Promise<StorePage | null> => {
  const manifest = await getManifest();
  const entry = manifest[route + (query ? '?' + query : '')] || manifest[route];
  if (!entry) return null;
  return JSON.parse(await fs.readFile(path.join(directory, 'pages', entry.file), 'utf8'));
});
export const getCatalog = cache(async (): Promise<string[]> => {
  try { return JSON.parse(await fs.readFile(path.join(directory, 'catalog.json'), 'utf8')); }
  catch { return []; }
});
export const getCollectionCatalog = cache(async (route: string): Promise<string[]> => {
  try { const all = JSON.parse(await fs.readFile(path.join(directory, 'collection-catalog.json'), 'utf8')); return all[route] || []; }
  catch { return []; }
});

export function replaceGrid(html: string, content: string) {
  const opening = /<div\b[^>]*data-sep-grid[^>]*>/.exec(html);
  if (!opening) return html;
  const start = opening.index + opening[0].length;
  const tags = /<\/?div\b[^>]*>/g;
  tags.lastIndex = start;
  let depth = 1;
  for (let tag = tags.exec(html); tag; tag = tags.exec(html)) {
    depth += tag[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + content + html.slice(tag.index);
  }
  return html;
}
const decode = (value: string) => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
export function cardInfo(card: string) {
  return {
    title: decode(card.match(/data-product-title="([^"]*)"/)?.[1] || ''),
    price: parsePrice(card.match(/data-product-price="([^"]*)"/)?.[1] || ''),
    available: !/<button[^>]*class="sep-products__add-button"[^>]*disabled/.test(card),
  };
}
export function filterCollection(html: string, cards: string[], query: Record<string, string | string[] | undefined>) {
  const max = Number(query['filter.v.price.lte']) || Infinity;
  const min = Number(query['filter.v.price.gte']) || 0;
  const availability = query['filter.v.availability'];
  const sort = String(query.sort_by || 'manual');
  const filtered = cards.filter(card => { const p = cardInfo(card); return p.price <= max && p.price >= min && (!availability || p.available === (availability === '1')); });
  if (sort.startsWith('price-')) filtered.sort((a, b) => (cardInfo(a).price - cardInfo(b).price) * (sort.endsWith('descending') ? -1 : 1));
  if (sort.startsWith('title-')) filtered.sort((a, b) => cardInfo(a).title.localeCompare(cardInfo(b).title) * (sort.endsWith('descending') ? -1 : 1));
  if (sort === 'created-descending') filtered.reverse();
  html = replaceGrid(html, filtered.join('') || '<p class="store-no-results" role="status">No products match your filters. <a href="?">Clear filters</a></p>');
  html = html.replace(/<input\b[^>]*type="checkbox"[^>]*>/g, input => {
    const name = input.match(/name="([^"]*)"/)?.[1], value = input.match(/value="([^"]*)"/)?.[1];
    input = input.replace(/\schecked(?:="[^"]*")?/g, '');
    return name && query[name] === value ? input.replace(/>$/, ' checked>') : input;
  });
  html = html.replace(/(<select\b[^>]*data-sep-sort[^>]*>)([\s\S]*?)(<\/select>)/, (_, open, options, close) => open + options.replace(/<option\b[^>]*>/g, (option: string) => { option = option.replace(/\sselected(?:="[^"]*")?/g, ''); return option.includes(`value="${sort}"`) ? option.replace(/>$/, ' selected>') : option; }) + close);
  return html.replace(/<main\b/, '<main data-local-filtered="true"').replace(/(<div\b[^>]*data-sep-grid[^>]*>)/, `<p class="store-result-count" role="status">${filtered.length} products · <a href="?">Clear filters</a></p>$1`);
}

export function searchPage(html: string, cards: string[], term: string) {
  const query = term.toLowerCase().trim();
  const matches = query ? cards.filter(card => cardInfo(card).title.toLowerCase().includes(query)) : cards;
  const safe = term.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  return html.replace(/<main\b[\s\S]*?<\/main>/, `<main class="store-search-page"><header><h1>Find your kind of cute</h1><p>Discover your next cuddle companion.</p><form data-store-search><input type="search" name="q" value="${safe}" placeholder="Search teddy bears, pandas, plushies…" aria-label="Search products"><button type="submit">Search →</button></form><p>${matches.length} products found</p></header><section class="sep-products"><div class="sep-products__grid">${matches.join('') || '<p>No plushies found. Try a different search.</p>'}</div></section></main>`);
}
