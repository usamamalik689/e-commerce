'use client';
import { useStore } from '@/features/cart/storefront-provider';
import Link from 'next/link';
import type { ProductSummary } from "@/types/store";
const star = 'M5.15557 1.16243C5.87039 -0.387318 8.07297 -0.387317 8.78779 1.16243L9.32415 2.32523C9.61548 2.95685 10.214 3.39173 10.9048 3.47363L12.1764 3.6244C13.8712 3.82535 14.5518 5.92012 13.2988 7.07886L12.3587 7.94828C11.848 8.42054 11.6194 9.1242 11.7549 9.80643L12.0045 11.0624C12.3371 12.7364 10.5552 14.031 9.06596 13.1974L7.94856 12.5719C7.34162 12.2322 6.60174 12.2322 5.9948 12.5719L4.8774 13.1974C3.38817 14.031 1.60626 12.7364 1.93886 11.0624L2.18843 9.80643C2.32399 9.1242 2.09535 8.42054 1.58468 7.94828L0.644527 7.07886C-0.608473 5.92012 0.0721612 3.82535 1.76695 3.6244L3.03858 3.47363C3.72931 3.39173 4.32788 2.95685 4.61922 2.32523L5.15557 1.16243Z';
export default function ProductCard({ product: p }: {
    product: ProductSummary;
}) {
    const store = useStore();
    const variant = p.variants.find(v => v.available) || p.variants[0];
    const price = (value: number) => "Rs." + value.toLocaleString("en-PK");
    const item = { url: `/products/${p.slug}`, id: String(variant?.id || p.id), title: p.title, image: p.image, price: price(p.price), quantity: 1 };
    const isSaved = store.saved.some(item => item.id === p.id);
    const discount = p.comparePrice > p.price ? Math.floor((1 - p.price / p.comparePrice) * 100) : 0;
    return <article className="sep-products__card">
    <div className={'sep-products__media' + (p.hoverImage ? ' sep-products__media--has-hover' : '')}>
      {discount > 0 && <span className={'sep-products__badge ' + (p.available ? 'sep-products__badge--off' : 'sep-products__badge--soldout')}>{discount}% OFF</span>}
      <button className="sep-products__wishlist" type="button" aria-label={`Add ${p.title} to wishlist`} aria-pressed={isSaved} onClick={() => store.toggleSaved({ ...item, id: p.id })} data-wishlist-button="" data-product-id={p.id} data-product-handle={p.slug} data-product-title={p.title} data-product-url={`/products/${p.slug}`} data-product-image={p.image} data-product-price={price(p.price)} data-product-compare={price(p.comparePrice)} data-product-variant={p.variants[0]?.id} data-product-rating={p.rating} data-product-reviews={p.reviewCount}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/toyshutch/0298ae34c50a0c1a.svg" width="44" height="44" alt="" loading="lazy"/>
        <span className="sep-products__wishlist-spinner" aria-hidden="true"/>
      </button>
      <Link href={`/products/${p.slug}`} prefetch={false} className="sep-products__image-link" aria-label={p.title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.imageAlt || p.title} width={600} height={600} loading="lazy" className="sep-products__image sep-products__image--primary" sizes={"(max-width: 749px) 45vw, 400px"}/>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {p.hoverImage && <img src={p.hoverImage} alt={p.title || p.title} width={600} height={600} loading="lazy" className="sep-products__image sep-products__image--hover" sizes={"(max-width: 749px) 45vw, 400px"}/>}
      </Link>
    </div>
    <div className="sep-products__details">
      <div className="sep-products__reviews"><span className="sep-products__stars" role="img" aria-label={`${p.rating || '0'} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F29D35" aria-hidden="true"><path d={star} stroke="#F29D35" strokeWidth="1"/></svg>)}
      </span><span className="sep-products__review-score">{p.rating.toFixed(1)}</span><span className="sep-products__review-count">({p.reviewCount})</span></div>
      <h3 className="sep-products__product-title"><Link href={`/products/${p.slug}`} prefetch={false}>{p.title}</Link></h3>
      <div className="sep-products__price"><span className="sep-products__sale-price">{price(p.price)}</span>{p.comparePrice > p.price && <s className="sep-products__regular-price">{price(p.comparePrice)}</s>}</div>
      <form className="sep-products__form" data-react-form onSubmit={event => { event.preventDefault(); store.addItem(item); }}><input type="hidden" name="id" value={p.variants[0]?.id} readOnly/><button className="sep-products__add-button" type="submit" disabled={!p.available}><span>{p.available ? 'Add to Cart' : 'Sold Out'}</span></button></form>
    </div>
  </article>;
}
