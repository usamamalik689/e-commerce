import Link from 'next/link';

type CardImage = { src?: string; alt?: string; width?: string | number; height?: string | number; sizes?: string; className?: string; loading?: string };
type CardProduct = { id: string; handle: string; title: string; url: string; image: string; price: string; compare: string; variant: string; rating: string; reviews: string; primary: CardImage; hover: CardImage | null; available: boolean; badge: string };
const star = 'M5.15557 1.16243C5.87039 -0.387318 8.07297 -0.387317 8.78779 1.16243L9.32415 2.32523C9.61548 2.95685 10.214 3.39173 10.9048 3.47363L12.1764 3.6244C13.8712 3.82535 14.5518 5.92012 13.2988 7.07886L12.3587 7.94828C11.848 8.42054 11.6194 9.1242 11.7549 9.80643L12.0045 11.0624C12.3371 12.7364 10.5552 14.031 9.06596 13.1974L7.94856 12.5719C7.34162 12.2322 6.60174 12.2322 5.9948 12.5719L4.8774 13.1974C3.38817 14.031 1.60626 12.7364 1.93886 11.0624L2.18843 9.80643C2.32399 9.1242 2.09535 8.42054 1.58468 7.94828L0.644527 7.07886C-0.608473 5.92012 0.0721612 3.82535 1.76695 3.6244L3.03858 3.47363C3.72931 3.39173 4.32788 2.95685 4.61922 2.32523L5.15557 1.16243Z';

export default function ProductCard({ product: p }: { product: CardProduct }) {
  return <article className="sep-products__card">
    <div className={'sep-products__media' + (p.hover ? ' sep-products__media--has-hover' : '')}>
      {p.badge && <span className={'sep-products__badge ' + (p.available ? 'sep-products__badge--off' : 'sep-products__badge--soldout')}>{p.badge}</span>}
      <button className="sep-products__wishlist" type="button" aria-label={`Add ${p.title} to wishlist`} aria-pressed="false" data-wishlist-button=""
        data-product-id={p.id} data-product-handle={p.handle} data-product-title={p.title} data-product-url={p.url} data-product-image={p.image} data-product-price={p.price} data-product-compare={p.compare} data-product-variant={p.variant} data-product-rating={p.rating} data-product-reviews={p.reviews}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/toyshutch/0298ae34c50a0c1a.svg" width="44" height="44" alt="" loading="lazy" />
        <span className="sep-products__wishlist-spinner" aria-hidden="true" />
      </button>
      <Link href={p.url} prefetch={false} className="sep-products__image-link" aria-label={p.title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.primary.src} alt={p.primary.alt || p.title} width={p.primary.width} height={p.primary.height} loading="lazy" className="sep-products__image sep-products__image--primary" sizes={p.primary.sizes} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {p.hover && <img src={p.hover.src} alt={p.hover.alt || p.title} width={p.hover.width} height={p.hover.height} loading="lazy" className="sep-products__image sep-products__image--hover" sizes={p.hover.sizes} />}
      </Link>
    </div>
    <div className="sep-products__details">
      <div className="sep-products__reviews"><span className="sep-products__stars" role="img" aria-label={`${p.rating || '0'} out of 5 stars`}>
        {Array.from({length:5},(_,i)=><svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F29D35" aria-hidden="true"><path d={star} stroke="#F29D35" strokeWidth="1" /></svg>)}
      </span><span className="sep-products__review-score">{p.rating}</span><span className="sep-products__review-count">({p.reviews})</span></div>
      <h3 className="sep-products__product-title"><Link href={p.url} prefetch={false}>{p.title}</Link></h3>
      <div className="sep-products__price"><span className="sep-products__sale-price">{p.price}</span>{p.compare && <s className="sep-products__regular-price">{p.compare}</s>}</div>
      <form className="sep-products__form"><input type="hidden" name="id" value={p.variant} readOnly /><button className="sep-products__add-button" type="submit" disabled={!p.available}><span>{p.available ? 'Add to Cart' : 'Sold Out'}</span></button></form>
    </div>
  </article>;
}
