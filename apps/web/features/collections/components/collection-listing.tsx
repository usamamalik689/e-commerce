'use client';
import { useEffect, useState } from 'react';
import type { Collection, ProductSummary } from '@/types/store';
import { filterProducts } from '@/lib/product-listing';
import ProductCard from '@/features/catalog/components/product-card';
export default function CollectionListing({ collection, products, initialQuery = '' }: {
    collection: Collection;
    products: ProductSummary[];
    initialQuery?: string;
}) {
    const [query, setQuery] = useState(initialQuery);
    const [filtersOpen, setFiltersOpen] = useState(false);
    useEffect(() => { const sync = () => setQuery(window.location.search.slice(1)); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync); }, []);
    const params = new URLSearchParams(query);
    const update = (key: string, value: string) => {
        const next = new URLSearchParams(query);
        value ? next.set(key, value) : next.delete(key);
        if (key !== 'page')
            next.delete('page');
        window.history.pushState(null, '', window.location.pathname + (next.size ? '?' + next : ''));
        setQuery(next.toString());
    };
    const clear = () => { const next = new URLSearchParams(query); [...next.keys()].filter(k => k.startsWith('filter.') || k === 'page').forEach(k => next.delete(k)); window.history.pushState(null, '', window.location.pathname + (next.size ? '?' + next : '')); setQuery(next.toString()); };
    const view = params.get('view');
    const candidates = view === 'sale' ? products.filter(p => p.comparePrice > p.price) : products;
    const result = filterProducts(candidates, params);
    const visible = Math.max(1, Number(params.get('page')) || 1) * 12;
    return <section id="sep-collection-template--23854184136963__grid" className="sep-products sep-collection"><div className="sep-collection__inner">
    <aside className="sep-collection__sidebar"><button type="button" className="sep-collection__filter-toggle" aria-expanded={filtersOpen} aria-controls="collection-filters" onClick={() => setFiltersOpen(!filtersOpen)}>Filter ☰</button>
      <form id="collection-filters" className={'sep-collection__filters' + (filtersOpen ? ' is-open mobile-open' : '')} onSubmit={event => event.preventDefault()}>
        <div className="sep-collection__filters-head"><h2 className="sep-collection__filter-title">Filter</h2>{params.has('filter.v.availability') || params.has('filter.v.price.lte') ? <button type="button" onClick={clear}>Clear All</button> : null}</div>
        <FilterGroup title="Availability">{[['1', 'In stock', products.filter(p => p.available).length], ['0', 'Out of stock', products.filter(p => !p.available).length]].map(([value, label, count]) => <label className="sep-filter__option" key={value}><input type="checkbox" name="filter.v.availability" value={String(value)} checked={params.get('filter.v.availability') === value} onChange={e => update('filter.v.availability', e.target.checked ? String(value) : '')}/><span className="sep-filter__box" aria-hidden="true"/><span className="sep-filter__label">{label}</span><span className="sep-filter__count">({count})</span></label>)}</FilterGroup>
        <FilterGroup title="Price">{[1499, 1999, 2999, 4999, 7999].map(value => <label className="sep-filter__option" key={value}><input type="checkbox" name="filter.v.price.lte" value={value} checked={params.get('filter.v.price.lte') === String(value)} onChange={e => update('filter.v.price.lte', e.target.checked ? String(value) : '')}/><span className="sep-filter__box" aria-hidden="true"/><span className="sep-filter__label">Under Rs. {value}</span></label>)}</FilterGroup>
      </form>
    </aside>
    <div className="sep-collection__main"><div className="sep-collection__bar"><h2 className="sep-collection__title">{view === 'sale' ? 'Sale' : view === 'best-sellers' ? 'Best Sellers' : 'All Products'}</h2><label className="sep-collection__sort"><span className="visually-hidden">Sort by</span><select aria-label="Sort by" value={params.get('sort_by') || 'manual'} onChange={e => update('sort_by', e.target.value)}>{[['manual', 'Featured'], ['best-selling', 'Best selling'], ['title-ascending', 'Alphabetically, A-Z'], ['title-descending', 'Alphabetically, Z-A'], ['price-ascending', 'Price, low to high'], ['price-descending', 'Price, high to low'], ['created-descending', 'Date, new to old'], ['created-ascending', 'Date, old to new']].map(([value, label]) => <option value={value} key={value}>Sort by: {label}</option>)}</select></label></div>
      <p className="visually-hidden" role="status" aria-live="polite">{result.length} products found in {collection.title}</p><div className="sep-collection__grid">{result.slice(0, visible).map(product => <ProductCard product={product} key={product.slug}/>)}{!result.length && <p className="store-no-results">No products match your filters. <button onClick={clear}>Clear filters</button></p>}</div>
      {visible < result.length && <div className="sep-collection__more"><button className="sep-collection__more-btn" onClick={() => update('page', String(visible / 12 + 1))}>Load More</button></div>}
    </div>
  </div></section>;
}
function FilterGroup({ title, children }: {
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);
    return <fieldset className="sep-filter"><button type="button" className="sep-filter__head" aria-expanded={open} onClick={() => setOpen(!open)}><span>{title}</span><svg className="sep-filter__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9s-4.4 6-6 6-6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button><div className="sep-filter__body" hidden={!open}>{children}</div></fieldset>;
}
