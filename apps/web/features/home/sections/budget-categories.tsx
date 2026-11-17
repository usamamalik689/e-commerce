import type { CSSProperties } from "react";
import Link from "next/link";
export default function BudgetCategories() {
    return (<section id={"shopify-section-template--23854282113283__toyshutch-budget"} className={"shopify-section section-sep-budget"}>
    <div id={"sep-budget-template--23854282113283__toyshutch-budget"} className={"sep-budget sep-budget--scalloped"} style={{ "--sep-bd-heading-color": "#ffffff", "--sep-bd-desc-color": "#ffffff", "--sep-bd-card-bg": "#ffffff", "--sep-bd-card-heading": "#1d1d1d", "--sep-bd-card-desc": "#383838", "--sep-bd-btn-bg": "#558904", "--sep-bd-btn-color": "#ffffff", "--sep-bd-overlap": "72px", "--sep-bd-left-bg": "#2ba8d9" } as CSSProperties}>
    <div className={"sep-budget__inner"}>
    <div className={"sep-budget__left"}>
    <div className={"sep-budget__left-content"}>
    <h2 className={"sep-budget__heading"}>{"Every Budget Deserves a Best Friend"}</h2>
    <div className={"sep-budget__description rte"}>
    <p>{"From small hugs to full-blown teddy takeovers."}</p>
    </div>
    <div className={"sep-budget__cards"}>
    <article className={"sep-budget__card"}>
    <div className={"sep-budget__card-media"}>
    <img src={"/toyshutch/6a1b441d06c462ac.png"} width={"250"} height={"240"} loading={"lazy"} className={"sep-budget__card-img"} sizes={"125px"}/>
    </div>
    <div className={"sep-budget__card-body"}>
    <h3 className={"sep-budget__card-heading"}>{"Everyday Cuddle"}</h3>
    <p className={"sep-budget__card-description"}>{"Our most-gifted size"}</p>
    </div>
    <Link className={"sep-budget__card-btn"} href={"/collections/all?filter.v.price.lte=1499"} prefetch={false}>{"\r\n                    Shop Under Rs.1,499\r\n                  "}</Link>
    </article>
    <article className={"sep-budget__card"}>
    <div className={"sep-budget__card-media"}>
    <img src={"/toyshutch/8e181fa067908586.png"} width={"250"} height={"259"} loading={"lazy"} className={"sep-budget__card-img"} sizes={"125px"}/>
    </div>
    <div className={"sep-budget__card-body"}>
    <h3 className={"sep-budget__card-heading"}>{"Big Hug Energy"}</h3>
    <p className={"sep-budget__card-description"}>{"Statement teddies & bouquets"}</p>
    </div>
    <Link className={"sep-budget__card-btn"} href={"/collections/all?filter.v.price.gte=1500&filter.v.price.lte=3099"} prefetch={false}>{"\r\n                    Shop Under Rs.3,099\r\n                  "}</Link>
    </article>
    <article className={"sep-budget__card"}>
    <div className={"sep-budget__card-media"}>
    <img src={"/toyshutch/373710fe437588ba.png"} width={"250"} height={"259"} loading={"lazy"} className={"sep-budget__card-img"} sizes={"125px"}/>
    </div>
    <div className={"sep-budget__card-body"}>
    <h3 className={"sep-budget__card-heading"}>{"Main Character Energy"}</h3>
    <p className={"sep-budget__card-description"}>{"Bigger plushies for bigger moments"}</p>
    </div>
    <Link className={"sep-budget__card-btn"} href={"/collections/all?filter.v.price.gte=3100&filter.v.price.lte=3899"} prefetch={false}>{"\r\n                    Shop Under Rs.3,899\r\n                  "}</Link>
    </article>
    <article className={"sep-budget__card"}>
    <div className={"sep-budget__card-media"}>
    <img src={"/toyshutch/cb25a13d1fb572aa.png"} width={"250"} height={"259"} loading={"lazy"} className={"sep-budget__card-img"} sizes={"125px"}/>
    </div>
    <div className={"sep-budget__card-body"}>
    <h3 className={"sep-budget__card-heading"}>{"Go Big or Go Home"}</h3>
    <p className={"sep-budget__card-description"}>{"Human-sized huggers"}</p>
    </div>
    <Link className={"sep-budget__card-btn"} href={"/collections/all?filter.v.price.gte=3900&filter.v.price.lte=7999"} prefetch={false}>{"\r\n                    Shop Under Rs.7,999\r\n                  "}</Link>
    </article>
    </div>
    </div>
    </div>
    <div className={"sep-budget__right"}>
    <img src={"/toyshutch/1d5a64da7357ac04.png"} width={"2400"} height={"1796"} loading={"lazy"} className={"sep-budget__right-img"} sizes={"(max-width: 989px) 100vw, 50vw"}/>
    </div>
    </div>
    </div>
    </section>);
}
