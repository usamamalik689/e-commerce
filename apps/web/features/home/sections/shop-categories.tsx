import type { CSSProperties } from "react";
import Link from "next/link";
export default function ShopCategories() {
    return (<section id={"shopify-section-template--23854282113283__toyshutch-find"} className={"shopify-section section-sep-find"}>
    <div id={"sep-find-template--23854282113283__toyshutch-find"} className={"sep-find"} style={{ "--sep-find-heading-1": "#1d1d1d", "--sep-find-heading-2": "#2ba8d9", "--sep-find-desc": "#383838", "--sep-find-item-heading": "#000000" } as CSSProperties}>
    <div className={"sep-find__inner"}>
    <h2 className={"sep-find__heading"}>
    <span className={"sep-find__heading-first"}>{"Find Your"}</span>
    <span className={"sep-find__heading-second"}>{"Kind of Cute"}</span>
    </h2>
    <div className={"sep-find__description rte"}>
    <p>{"Find the perfect companion for every occasion"}</p>
    </div>
    <div className={"sep-find__grid"}>
    <div className={"sep-find__item"}>
    <Link className={"sep-find__media"} href={"/collections/new-arrivals"} prefetch={false}>
    <img src={"/toyshutch/f6affb76e38fe6cb.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-find__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-find__item-heading"} href={"/collections/new-arrivals"} prefetch={false}>{"\r\n                  New Arrivals\r\n                "}</Link>
    </div>
    <div className={"sep-find__item"}>
    <Link className={"sep-find__media"} href={"/collections/plushies?view=category"} prefetch={false}>
    <img src={"/toyshutch/53c11e0a9439f2e2.png"} width={"600"} height={"804"} loading={"lazy"} className={"sep-find__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-find__item-heading"} href={"/collections/plushies?view=category"} prefetch={false}>{"\r\n                  Plushies\r\n                "}</Link>
    </div>
    <div className={"sep-find__item"}>
    <Link className={"sep-find__media"} href={"/collections/teddy-bears?view=category"} prefetch={false}>
    <img src={"/toyshutch/def3297e689ab377.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-find__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-find__item-heading"} href={"/collections/teddy-bears?view=category"} prefetch={false}>{"\r\n                  Teddy Bears\r\n                "}</Link>
    </div>
    <div className={"sep-find__item"}>
    <Link className={"sep-find__media"} href={"/collections/stuffed-animals?view=category"} prefetch={false}>
    <img src={"/toyshutch/7cb79af78d267f93.png"} width={"600"} height={"804"} loading={"lazy"} className={"sep-find__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-find__item-heading"} href={"/collections/stuffed-animals?view=category"} prefetch={false}>{"\r\n                  Stuffed Animals\r\n                "}</Link>
    </div>
    </div>
    </div>
    </div>
    </section>);
}
