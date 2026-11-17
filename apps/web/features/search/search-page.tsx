'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ProductSummary } from '@/types/store';
import ProductCard from '@/features/catalog/components/product-card';
import { filterProducts } from '@/lib/product-listing';
export default function SearchPage({ products, initialTerm }: {
    products: ProductSummary[];
    initialTerm: string;
}) {
    const [term, setTerm] = useState(initialTerm);
    const [query, setQuery] = useState(initialTerm);
    useEffect(() => { const sync = () => { const term = new URLSearchParams(window.location.search).get('q') || ''; setTerm(term); setQuery(term); }; window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync); }, []);
    const results = filterProducts(products, new URLSearchParams({ q: query }), true);
    return <main id="MainContent" className="store-search-page"><header><Link href="/">Home</Link><h1>Find your kind of cute</h1><p>Discover your next cuddle companion.</p><form data-react-form onSubmit={e => { e.preventDefault(); setQuery(term); window.history.pushState(null, '', '/search?q=' + encodeURIComponent(term)); }}><input type="search" name="q" placeholder="Search teddy bears, pandas, plushies..." aria-label="Search products" value={term} onChange={e => setTerm(e.target.value)}/><button type="submit">Search</button></form><p role="status">{results.length} products found</p></header><section className="sep-products"><div className="sep-products__grid">{results.map(product => <ProductCard product={product} key={product.slug}/>)}{!results.length && <p>No plushies found. Try another search.</p>}</div></section></main>;
}
