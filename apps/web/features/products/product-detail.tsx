import Link from 'next/link';
import type { Product } from '@/types/store';
import RichText from '@/components/shared/rich-text';
import Newsletter from '@/components/shared/newsletter';
import ProductTrust from './components/product-trust';
import ProductTabs from './components/product-tabs';
import ProductCard from '@/features/catalog/components/product-card';
import { catalogBySlug as productsBySlug, catalog as products, productSummary } from '@/data/catalog';
import ProductGallery from "./components/product-gallery";
import ProductPurchase from "./components/product-purchase";
export default function ProductDetail({ product: p }: {
    product: Product;
}) {
    const related = (p.relatedSlugs.length ? p.relatedSlugs.map(slug => productsBySlug[slug]).filter(Boolean) : products.filter(item => item.slug !== p.slug)).slice(0, 4);
    return <main id="MainContent" className="content-for-layout focus-none" data-template="product">
    <section id="sep-pdp-template--23854184628483__main" className="sep-pdp" data-sep-pdp>
      <div className="sep-pdp__container">
        <nav className="sep-pdp__crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>&gt;</span><Link href="/collections">Collections</Link><span>&gt;</span><Link href={p.category.href}>{p.category.title}</Link><span>&gt;</span><span>{p.title}</span></nav>
        <div className="sep-pdp__main">
          <ProductGallery key={p.slug} images={p.gallery}/>
          <ProductPurchase key={p.slug} product={{ ...productSummary(p), optionNames: p.optionNames, personalizable: p.personalizable }} addons={products.filter(item => ['gift-packing-bag', 'chocolate', 'artificial-flowers'].includes(item.slug))}/>
        </div>
        <ProductTrust />
        <div><div className="sep-pdp__card sep-pdp__description rte"><RichText nodes={p.description}/></div><ProductTabs /></div>
        <section className="sep-pdp__card sep-pdp__reviews" id="SepReviews"><h2 className="sep-pdp__section-title">Customer Reviews</h2><p>{p.rating.toFixed(1)} out of 5 · {p.reviewCount} reviews</p><div className="jdgm-ssr-reviews__list">{p.reviews.map((review, index) => <article key={index} className="jdgm-rev jdgm-divider-top"><header><span className="sep-pdp__stars">{'★'.repeat(Math.round(review.rating))}</span><strong className="jdgm-rev__author">{review.author}</strong><time dateTime={review.date}>{review.date}</time></header><div className="jdgm-rev__body"><p>{review.text}</p></div></article>)}</div></section>
      </div>
    </section>
    <section className="shopify-section section-sep-products"><section id="sep-products-template--23854184628483__related" className="sep-products sep-products--background sep-products--blue"><div className="sep-products__inner"><div className="sep-products__header"><div className="sep-products__intro"><h2 className="sep-products__heading">You may like these</h2><div className="sep-products__description rte"><p>Our most loved plush friends</p></div></div><Link className="sep-products__view-all" href="/collections/all">View All</Link></div><div className="sep-products__grid">{related.map(product => <ProductCard key={product.slug} product={product}/>)}</div></div></section></section>
    <Newsletter />
  </main>;
}
