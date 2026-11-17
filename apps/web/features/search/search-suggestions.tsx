'use client';
import { useEffect, useState } from 'react';
import type { ProductSummary } from '@/types/store';
import ProductCard from '@/features/catalog/components/product-card';
export function SearchSuggestions({ items }: {
    items: ProductSummary[];
}) {
    const [term, setTerm] = useState('');
    useEffect(() => { const input = document.querySelector<HTMLInputElement>('[data-sep-search-input]'); const update = () => setTerm(input?.value.toLowerCase().trim() || ''); input?.addEventListener('input', update); return () => input?.removeEventListener('input', update); }, []);
    const results = items.filter(product => product.title.toLowerCase().includes(term)).slice(0, 4);
    return <>{results.map(product => <ProductCard key={product.slug} product={product}/>)}{!results.length && <p role="status">No plushies found. Try Panda, Teddy or Penguin.</p>}</>;
}
