'use client';
import { Fragment, useEffect, useState } from 'react';
import type { ProductItem } from './product-results';
export function SearchSuggestions({ items }: { items: ProductItem[] }) {
  const [term, setTerm] = useState('');
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>('[data-sep-search-input]');
    const update = () => setTerm(input?.value.toLowerCase().trim() || '');
    input?.addEventListener('input', update);
    return () => input?.removeEventListener('input', update);
  }, []);
  const results = items.filter(item => item.title.toLowerCase().includes(term)).slice(0,4);
  return <>{results.map(item => <div className={"react-product-slot"} key={item.id}>{item.content}</div>)}{!results.length && <p role={"status"}>No plushies found. Try Panda, Teddy or Penguin.</p>}</>;
}
