import ProductCard from "@/features/catalog/components/product-card";
import { catalogBySlug as productsBySlug } from "@/data/catalog";
import type { CSSProperties } from "react";
import Link from "next/link";
export default function CollectionDirectory() {
    return <>
    <main id={"MainContent"} className={"content-for-layout focus-none"} role={"main"} tabIndex={-1} data-template={"list-collections"}>
    <div id={"shopify-section-template--23854184235267__hero"} className={"shopify-section"}>
    <section className={"toy-contact-page toy-contact-hero"} data-toy-contact-page={""} data-toy-contact-hero={""}>
    <div className={"toy-contact-container"}>
    <div className={"toy-contact-hero__inner"} style={{ "backgroundColor": "#ffe5bd" } as CSSProperties}>
    <div className={"\r\n          toy-contact-hero__media\r\n          toy-contact-hero__media--left\r\n          toy-contact-parallax-scene\r\n        "} data-toy-parallax-scene={""}>
    <div className={"toy-contact-parallax-layer"} data-depth={"0.12"}>
    <img src={"/toyshutch/2be011f0cff80286.png"} width={"700"} height={"725"} loading={"eager"} className={"toy-contact-hero__image"} fetchPriority={"high"} sizes={"(max-width: 749px) 140px, 285px"}/>
    </div>
    </div>
    <div className={"toy-contact-hero__content"} data-toy-hero-content={""}>
    <h1 className={"toy-contact-hero__title"} data-toy-hero-title={""} style={{ "color": "#27aae1" } as CSSProperties}>{"\r\n            Shop by Occasion\r\n          "}</h1>
    <div className={"toy-contact-hero__description"} data-toy-hero-description={""}>
    <p>{"Because \"just because\" is a valid reason too."}</p>
    </div>
    </div>
    <div className={"\r\n          toy-contact-hero__media\r\n          toy-contact-hero__media--right\r\n          toy-contact-parallax-scene\r\n        "} data-toy-parallax-scene={""}>
    <div className={"toy-contact-parallax-layer"} data-depth={"0.10"}>
    <img src={"/toyshutch/86623ecc695c8a95.png"} width={"700"} height={"724"} loading={"eager"} className={"toy-contact-hero__image"} sizes={"(max-width: 749px) 140px, 285px"}/>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    <section id={"shopify-section-template--23854184235267__birthday"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__birthday"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Birthday Collection"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"The gift that beats another gift card."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/birthday-gift-for-girls"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["hoodie-panda-teddy-bear-plush-with-cap"]}/>
    <ProductCard product={productsBySlug["blue-hoodie-teddy-bear-cute-stuffed-teddy-with-cap"]}/>
    <ProductCard product={productsBySlug["i-love-you-penguin-stuffed-plush-toy"]}/>
    <ProductCard product={productsBySlug["big-eyes-monkey-plush-toy"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__anniversary"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__anniversary"} className={"sep-products sep-products--background"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Anniversary Collection"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"A soft way to mark another year together."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/anniversary-gift-ideas"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["mother-and-baby-panda-plush-soft-toy"]}/>
    <ProductCard product={productsBySlug["soft-strawberry-rabbit-plush-bunny"]}/>
    <ProductCard product={productsBySlug["soft-stuffed-red-teddy-bear-with-cap-1"]}/>
    <ProductCard product={productsBySlug["giant-3-feet-teddy-bear"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__for-her"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__for-her"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"For Her Collection"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Thoughtful, soft, and effortlessly sweet, plush gifts picked for the women in your life"}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/gifts-for-her"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["hello-kitty-bubble-tea-plush-toy"]}/>
    <ProductCard product={productsBySlug["soft-strawberry-rabbit-plush-bunny"]}/>
    <ProductCard product={productsBySlug["viral-running-cow-plush-toy"]}/>
    <ProductCard product={productsBySlug["pink-teddy-bear-with-hoodie"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__for-him"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__for-him"} className={"sep-products sep-products--background sep-products--blue"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"For Him Collection"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Plush gifts he'll actually keep on his desk."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/gifts-for-him"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["blue-hoodie-teddy-bear-cute-stuffed-teddy-with-cap"]}/>
    <ProductCard product={productsBySlug["bamboo-panda-plush-toy"]}/>
    <ProductCard product={productsBySlug["brown-teddy-bear-with-gold-medal"]}/>
    <ProductCard product={productsBySlug["gold-medal-panda-plush-toy"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__bundle"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__bundle"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Bundle Collection"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Start with one. Leave with three. (We won't judge.)"}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/friendship-day-gifts"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["mother-and-baby-panda-plush-soft-toy"]}/>
    <ProductCard product={productsBySlug["giant-3-feet-teddy-bear"]}/>
    <ProductCard product={productsBySlug["fluffy-big-eyes-panda-bear-plush-toy-soft-cotton-panda-stuffed-animal-for-kids"]}/>
    <ProductCard product={productsBySlug["love-heart-teddy-bear"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__toyshutch_products_7DKUqb"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__toyshutch_products_7DKUqb"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Fun Toys"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Toys that keep kids laughing."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/fun-toys"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["magnetic-sticks-blocks-set-36-pcs-building-blocks"]}/>
    <ProductCard product={productsBySlug["flying-armor-electric-bubble-blaster-toy-bubble-gun"]}/>
    <ProductCard product={productsBySlug["musical-fishing-game-toy"]}/>
    <ProductCard product={productsBySlug["baby-pedal-piano-fitness-mat-with-music-lights-and-hanging-toys"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__toyshutch_products_pXr39y"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854184235267__toyshutch_products_pXr39y"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Educational Toys"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Smart toys that make learning fun."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/educational-toys"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["lcd-drawing-tablet-16-inch"]}/>
    <ProductCard product={productsBySlug["colorful-building-blocks-toy-set-72-pcs"]}/>
    <ProductCard product={productsBySlug["intelligence-study-book-for-kids-with-sound-and-pen"]}/>
    <ProductCard product={productsBySlug["doodle-mat-water-canvas"]}/>
    </div>
    </div>
    </section>
    </section>
    <section id={"shopify-section-template--23854184235267__newsletter"} className={"shopify-section section-newsletter-cta"}>
    <section className={"newsletter-cta section-template--23854184235267__newsletter"}>
    <div className={"newsletter-cta__decor newsletter-cta__decor--left"} aria-hidden={"true"}>
    <img src={"/toyshutch/c62cc58118861c58.png"} alt={""} width={"720"} height={"636"} loading={"lazy"} sizes={"(max-width: 989px) 24vw, 300px"} className={"newsletter-cta__decor-image"}/>
    </div>
    <div className={"newsletter-cta__decor newsletter-cta__decor--right"} aria-hidden={"true"}>
    <img src={"/toyshutch/84cd59ebe25cb857.png"} alt={""} width={"720"} height={"646"} loading={"lazy"} sizes={"(max-width: 989px) 24vw, 300px"} className={"newsletter-cta__decor-image"}/>
    </div>
    <div className={"page-width newsletter-cta__inner"}>
    <h2 className={"newsletter-cta__heading"}>{"Stay Close to the Cuteness"}</h2>
    <p className={"newsletter-cta__text"}>{"Be the first to discover new ToysHutch plushies, special offers, and little surprises made just for you."}</p>
    <div className={"newsletter-cta__form-wrap"}>
    <form method={"post"} id={"NewsletterCtaForm-template--23854184235267__newsletter"} acceptCharset={"UTF-8"} className={"newsletter-cta__form"} data-success-message={"Thanks for subscribing!"} data-seconds={"5"}>
    <input type={"hidden"} name={"form_type"} defaultValue={"customer"}/>
    <input type={"hidden"} name={"utf8"} defaultValue={"✓"}/>
    <input type={"hidden"} name={"contact[tags]"} defaultValue={"newsletter"}/>
    <div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-email-error={""} hidden={true}>
    </div>
    <div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-duplicate={""} hidden={true}>{"This email is already subscribed."}</div>
    <div className={"newsletter-cta__fields"}>
    <label className={"visually-hidden"} htmlFor={"NewsletterCtaEmail-template--23854184235267__newsletter"}>{"\r\n              Email\r\n            "}</label>
    <div className={"newsletter-cta__field-combo"}>
    <input id={"NewsletterCtaEmail-template--23854184235267__newsletter"} type={"email"} name={"contact[email]"} className={"newsletter-cta__input"} defaultValue={""} autoCorrect={"off"} autoCapitalize={"off"} autoComplete={"email"} placeholder={"Enter your email"} required={true}/>
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
    </>;
}
