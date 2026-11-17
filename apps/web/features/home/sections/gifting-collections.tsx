import Link from "next/link";
export default function GiftingCollections() {
    return (<section id={"shopify-section-template--23854282113283__toyshutch-gift"} className={"shopify-section section-sep-gift"}>
    <span id={"gifts"} className={"sep-gift__anchor"}>
    </span>
    <div id={"sep-gift-template--23854282113283__toyshutch-gift"} className={"sep-gift"}>
    <div className={"sep-gift__inner"}>
    <div className={"sep-gift__header"}>
    <div className={"sep-gift__content"}>
    <h2 className={"sep-gift__heading"}>{"Gifting Collections"}</h2>
    <div className={"sep-gift__description rte"}>
    <p>{"Something for every mood, moment, and person on your list."}</p>
    </div>
    </div>
    <Link className={"sep-gift__button"} href={"/collections"} prefetch={false}>{"\r\n          View Collections\r\n        "}</Link>
    </div>
    <div className={"sep-gift__grid"}>
    <div className={"sep-gift__item"}>
    <Link className={"sep-gift__media"} href={"/collections/birthday-gift-for-girls"} prefetch={false}>
    <img src={"/toyshutch/2dc873baa0dc6494.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-gift__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-gift__item-heading"} href={"/collections/birthday-gift-for-girls"} prefetch={false}>{"\r\n                  Birthday Collection\r\n                "}</Link>
    </div>
    <div className={"sep-gift__item"}>
    <Link className={"sep-gift__media"} href={"/collections/anniversary-gift-ideas"} prefetch={false}>
    <img src={"/toyshutch/7d3508d44c697449.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-gift__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-gift__item-heading"} href={"/collections/anniversary-gift-ideas"} prefetch={false}>{"\r\n                  Anniversary Collection\r\n                "}</Link>
    </div>
    <div className={"sep-gift__item"}>
    <Link className={"sep-gift__media"} href={"/collections/gifts-for-him"} prefetch={false}>
    <img src={"/toyshutch/ba148500832f168b.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-gift__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-gift__item-heading"} href={"/collections/gifts-for-him"} prefetch={false}>{"\r\n                  For Him Collection\r\n                "}</Link>
    </div>
    <div className={"sep-gift__item"}>
    <Link className={"sep-gift__media"} href={"/collections/gifts-for-her"} prefetch={false}>
    <img src={"/toyshutch/b6f460209636faf3.png"} width={"600"} height={"648"} loading={"lazy"} className={"sep-gift__img"} sizes={"(max-width: 749px) 45vw, 22vw"}/>
    </Link>
    <Link className={"sep-gift__item-heading"} href={"/collections/gifts-for-her"} prefetch={false}>{"\r\n                  For Her Collection\r\n                "}</Link>
    </div>
    </div>
    </div>
    </div>
    </section>);
}
