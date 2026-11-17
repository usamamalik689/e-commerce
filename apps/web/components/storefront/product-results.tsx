'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { filterProducts, type ListingProduct } from '@/lib/product-listing';
export type ProductItem = ListingProduct & { content: ReactNode };

export function ProductResults({ items, gridClass = 'sep-products__grid', search = false }: { items: ProductItem[]; gridClass?: string; search?: boolean }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {
    const sync = () => {
      const params = new URLSearchParams(window.location.search);
      setQuery(window.location.search);
      setPage(Math.max(1, Number(params.get('page')) || 1));
      document.querySelectorAll<HTMLInputElement>('[data-sep-filters] input').forEach(input => {
        if (input.type === 'checkbox') input.checked = params.get(input.name) === input.value;
        else if (input.type !== 'hidden') input.value = params.get(input.name) || '';
      });
      const sort = document.querySelector<HTMLSelectElement>('[data-sep-sort]');
      if (sort) sort.value = params.get('sort_by') || 'manual';
      const searchInput = document.querySelector<HTMLInputElement>('[data-store-search] input[name="q"]');
      if (searchInput) searchInput.value = params.get('q') || '';
    };
    sync();
    const change = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (!input.closest('[data-sep-filters]') && !input.matches('[data-sep-sort]')) return;
      const params = new URLSearchParams(window.location.search);
      if (input.name) {
        params.delete(input.name);
        if (input.type === 'checkbox') {
          if (input.checked) params.set(input.name, input.value);
        } else if (input.value) params.set(input.name, input.value);
      }
      if (input.matches('[data-sep-sort]')) params.set('sort_by', input.value);
      params.delete('page');
      window.history.pushState(null, '', window.location.pathname + (params.size ? '?' + params : ''));
      sync();
    };
    document.addEventListener('change', change);
    window.addEventListener('popstate', sync);
    return () => { document.removeEventListener('change', change); window.removeEventListener('popstate', sync); };
  }, []);
  const filtered = filterProducts(items, new URLSearchParams(query), search);
  const pages = Math.max(1, Math.ceil(filtered.length / 24));
  const active = Math.min(page, pages);
  const more = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', String(active + 1));
    window.history.pushState(null, '', window.location.pathname + '?' + params);
    setPage(active + 1); setQuery('?' + params);
  };
  const clear = () => {
    const params = new URLSearchParams(window.location.search);
    [...params.keys()].filter(key => key.startsWith('filter.') || key === 'page').forEach(key => params.delete(key));
    window.history.pushState(null, '', window.location.pathname + (params.size ? '?' + params : ''));
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return <div data-react-products>
    <p className="visually-hidden" role="status" aria-live="polite">{filtered.length} products found</p>
    <div className={gridClass}>{filtered.slice(0, active*24).map(item => <Fragment key={item.id}>{item.content}</Fragment>)}
      {!filtered.length && <p className="store-no-results">No products match your filters. <button onClick={clear}>Clear filters</button></p>}
    </div>
    {active < pages && <div className="react-load-more"><button className="sep-collection__more-btn" onClick={more}>Load More</button></div>}
  </div>;
}
