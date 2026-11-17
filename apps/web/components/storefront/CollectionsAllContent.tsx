import type { CSSProperties } from "react";
import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import { items as collectionItems } from "@/components/storefront/catalog-all";

export default function CollectionsAllContent() { return <>
<main id={"MainContent"} className={"content-for-layout focus-none"} role={"main"} tabIndex={-1} data-template={"collection"}>
<section id={"shopify-section-template--23854184136963__hero"} className={"shopify-section section-sep-collection-hero"}>
<section className={"toy-contact-page toy-contact-hero sep-collection-hero"} data-toy-contact-page={""} data-toy-contact-hero={""}>
<div className={"toy-contact-container"}>
<div className={"toy-contact-hero__inner"} style={{"backgroundColor": "#ffe5bd"} as CSSProperties}>
<div className={"toy-contact-hero__media toy-contact-hero__media--left toy-contact-parallax-scene"} data-toy-parallax-scene={""}>
<div className={"toy-contact-parallax-layer"} data-depth={"0.12"}>
<img src={"/toyshutch/2be011f0cff80286.png"} width={"700"} height={"725"} loading={"eager"} className={"toy-contact-hero__image"} fetchPriority={"high"} sizes={"(max-width: 749px) 140px, 285px"} />
</div>
</div>
<div className={"toy-contact-hero__content"} data-toy-hero-content={""}>
<div className={"toy-contact-hero__breadcrumb"} data-toy-hero-breadcrumb={""}>
<Link href={"/"} prefetch={false}>{"Home"}</Link>
<span aria-hidden={"true"}>{">"}</span>
<Link href={"/collections"} prefetch={false}>{"Collections"}</Link>
<span aria-hidden={"true"}>{">"}</span>
<span aria-current={"page"}>{"Explore All Toys"}</span>
</div>
<h1 className={"toy-contact-hero__title"} data-toy-hero-title={""} style={{"color": "#27aae1"} as CSSProperties}>{"\r\n            Explore All Toys\r\n          "}</h1>
</div>
<div className={"toy-contact-hero__media toy-contact-hero__media--right toy-contact-parallax-scene"} data-toy-parallax-scene={""}>
<div className={"toy-contact-parallax-layer"} data-depth={"0.10"}>
<img src={"/toyshutch/86623ecc695c8a95.png"} width={"700"} height={"724"} loading={"eager"} className={"toy-contact-hero__image"} sizes={"(max-width: 749px) 140px, 285px"} />
</div>
</div>
</div>
</div>
</section>
<span id={"products"} className={"sep-collection-hero__anchor"} aria-hidden={"true"}>
</span>
</section>
<section id={"shopify-section-template--23854184136963__grid"} className={"shopify-section section-sep-collection"}>
<section id={"sep-collection-template--23854184136963__grid"} className={"sep-products sep-collection"} data-sep-collection={""} data-section-id={"template--23854184136963__grid"}>
<div className={"sep-collection__inner"}>
<aside className={"sep-collection__sidebar"}>
<button className={"sep-collection__filter-toggle"} type={"button"} aria-expanded={"false"} aria-controls={"SepFilters-template--23854184136963__grid"} data-sep-filter-toggle={""}>
<span>{"Filter"}</span>
<svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
<path d={"M3 5h18M6 12h12M10 19h4"}>
</path>
</svg>
</button>
<form id={"SepFilters-template--23854184136963__grid"} className={"sep-collection__filters"} method={"get"} data-sep-filters={""}>
<div className={"sep-collection__filters-head"}>
<h2 className={"sep-collection__filter-title"}>{"Filter"}</h2>
</div>
<fieldset className={"sep-filter"} data-sep-filter-group={""}>
<button className={"sep-filter__head"} type={"button"} aria-expanded={"true"} data-sep-filter-head={""}>
<span>{"Availability"}</span>
<svg className={"sep-filter__chevron"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
<path d={"M18 9s-4.4 6-6 6-6-6-6-6"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
</path>
</svg>
</button>
<div className={"sep-filter__body"}>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.availability"} defaultValue={"1"} data-sep-single={"filter.v.availability"} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"In stock"}</span>
<span className={"sep-filter__count"}>{"(68)"}</span>
</label>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.availability"} defaultValue={"0"} data-sep-single={"filter.v.availability"} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Out of stock"}</span>
<span className={"sep-filter__count"}>{"(3)"}</span>
</label>
</div>
</fieldset>
<fieldset className={"sep-filter"} data-sep-filter-group={""}>
<button className={"sep-filter__head"} type={"button"} aria-expanded={"true"} data-sep-filter-head={""}>
<span>{"Price"}</span>
<svg className={"sep-filter__chevron"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
<path d={"M18 9s-4.4 6-6 6-6-6-6-6"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
</path>
</svg>
</button>
<div className={"sep-filter__body"}>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.price.lte"} defaultValue={"1499"} data-sep-price-step={""} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Under Rs. 1499"}</span>
</label>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.price.lte"} defaultValue={"1999"} data-sep-price-step={""} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Under Rs. 1999"}</span>
</label>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.price.lte"} defaultValue={"2999"} data-sep-price-step={""} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Under Rs. 2999"}</span>
</label>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.price.lte"} defaultValue={"4999"} data-sep-price-step={""} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Under Rs. 4999"}</span>
</label>
<label className={"sep-filter__option"}>
<input type={"checkbox"} name={"filter.v.price.lte"} defaultValue={"7999"} data-sep-price-step={""} />
<span className={"sep-filter__box"} aria-hidden={"true"}>
</span>
<span className={"sep-filter__label"}>{"Under Rs. 7999"}</span>
</label>
</div>
</fieldset>
</form>
</aside>
<div className={"sep-collection__main"}>
<div className={"sep-collection__bar"}>
<h2 className={"sep-collection__title"}>{"All Products"}</h2>
<label className={"sep-collection__sort"}>
<span className={"visually-hidden"}>{"Sort by"}</span>
<select name={"sort_by"} form={"SepFilters-template--23854184136963__grid"} data-sep-sort={""} aria-label={"Sort by"}>
<option value={"manual"}>{"\r\n                    Sort by: Featured\r\n                  "}</option>
<option value={"most-relevant"}>{"\r\n                    Sort by: Most relevant\r\n                  "}</option>
<option value={"best-selling"}>{"\r\n                    Sort by: Best selling\r\n                  "}</option>
<option value={"title-ascending"}>{"\r\n                    Sort by: Alphabetically, A-Z\r\n                  "}</option>
<option value={"title-descending"}>{"\r\n                    Sort by: Alphabetically, Z-A\r\n                  "}</option>
<option value={"price-ascending"}>{"\r\n                    Sort by: Price, low to high\r\n                  "}</option>
<option value={"price-descending"}>{"\r\n                    Sort by: Price, high to low\r\n                  "}</option>
<option value={"created-ascending"}>{"\r\n                    Sort by: Date, old to new\r\n                  "}</option>
<option value={"created-descending"}>{"\r\n                    Sort by: Date, new to old\r\n                  "}</option>
</select>
<svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
<path d={"M18 9s-4.4 6-6 6-6-6-6-6"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
</path>
</svg>
</label>
</div>
<ProductResults items={collectionItems} gridClass={"sep-collection__grid"} />
<div className={"sep-collection__more"}>
<Link className={"sep-collection__more-btn"} href={"/collections/all?page=2"} data-sep-load-more={""} prefetch={false}>{"\r\n                Load More\r\n              "}</Link>
</div>
</div>
</div>
</section>
</section>
<section id={"shopify-section-template--23854184136963__newsletter"} className={"shopify-section section-newsletter-cta"}>
<section className={"newsletter-cta section-template--23854184136963__newsletter"}>
<div className={"newsletter-cta__decor newsletter-cta__decor--left"} aria-hidden={"true"}>
<img src={"/toyshutch/c62cc58118861c58.png"} alt={""} width={"720"} height={"636"} loading={"lazy"} sizes={"(max-width: 989px) 24vw, 300px"} className={"newsletter-cta__decor-image"} />
</div>
<div className={"newsletter-cta__decor newsletter-cta__decor--right"} aria-hidden={"true"}>
<img src={"/toyshutch/84cd59ebe25cb857.png"} alt={""} width={"720"} height={"646"} loading={"lazy"} sizes={"(max-width: 989px) 24vw, 300px"} className={"newsletter-cta__decor-image"} />
</div>
<div className={"page-width newsletter-cta__inner"}>
<h2 className={"newsletter-cta__heading"}>{"Stay Close to the Cuteness"}</h2>
<p className={"newsletter-cta__text"}>{"Be the first to discover new ToysHutch plushies, special offers, and little surprises made just for you."}</p>
<div className={"newsletter-cta__form-wrap"}>
<form method={"post"} id={"NewsletterCtaForm-template--23854184136963__newsletter"} acceptCharset={"UTF-8"} className={"newsletter-cta__form"} data-success-message={"Thanks for subscribing!"} data-seconds={"5"}>
<input type={"hidden"} name={"form_type"} defaultValue={"customer"} />
<input type={"hidden"} name={"utf8"} defaultValue={"✓"} />
<input type={"hidden"} name={"contact[tags]"} defaultValue={"newsletter"} />
<div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-email-error={""} hidden={true}>
</div>
<div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-duplicate={""} hidden={true}>{"This email is already subscribed."}</div>
<div className={"newsletter-cta__fields"}>
<label className={"visually-hidden"} htmlFor={"NewsletterCtaEmail-template--23854184136963__newsletter"}>{"\r\n              Email\r\n            "}</label>
<div className={"newsletter-cta__field-combo"}>
<input id={"NewsletterCtaEmail-template--23854184136963__newsletter"} type={"email"} name={"contact[email]"} className={"newsletter-cta__input"} defaultValue={""} autoCorrect={"off"} autoCapitalize={"off"} autoComplete={"email"} placeholder={"Enter your email"} required={true} />
<button type={"submit"} className={"newsletter-cta__submit focus-inset"} name={"commit"} aria-label={"Subscribe to newsletter"}>
<span>{"Subscribe"}</span>
<svg width={"19"} height={"13"} viewBox={"0 0 19 13"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
<path d={"M0.5 6.5L16.5 6.5M11.5 0.5L17.5 6.5L11.5 12.5"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"}>
</path>
</svg>
<span className={"btn-spinner"} aria-hidden={"true"}>
</span>
</button>
</div>
</div>
</form>
</div>
</div>
</section>
</section>
</main>
</>; }
