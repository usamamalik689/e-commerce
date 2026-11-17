export type ListingProduct = { id: string; title: string; price: number; available: boolean };

export function filterProducts<T extends ListingProduct>(items: T[], params: URLSearchParams, search = false): T[] {
  const min = Number(params.get('filter.v.price.gte')) || 0;
  const max = Number(params.get('filter.v.price.lte')) || Infinity;
  const stock = params.get('filter.v.availability');
  const term = (params.get('q') || '').toLowerCase().trim();
  const filtered = items.filter(item => item.price >= min && item.price <= max && (!stock || item.available === (stock === '1')) && (!search || item.title.toLowerCase().includes(term)));
  const sort = params.get('sort_by') || 'manual';
  if (sort.startsWith('price-')) filtered.sort((a,b) => (a.price-b.price)*(sort.endsWith('descending')?-1:1));
  if (sort.startsWith('title-')) filtered.sort((a,b) => a.title.localeCompare(b.title)*(sort.endsWith('descending')?-1:1));
  if (sort === 'created-descending') filtered.reverse();
  return filtered;
}
