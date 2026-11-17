import type { CSSProperties } from "react";
import Link from "next/link";
export default function SaleBanner() {
    return (<section id={"shopify-section-template--23854282113283__toyshutch-sale-banner"} className={"shopify-section section-toyshutch-sale-banner"}>
    <div id={"tsb-template--23854282113283__toyshutch-sale-banner"} className={"tsb tsb--connected"} data-tsb={""} style={{ "--tsb-bg": "#ffe8c8", "--tsb-heading-color": "#2ba8d9", "--tsb-accent": "#ffa62b", "--tsb-thick": "2", "--tsb-text-color": "#333333", "--tsb-radius": "24px", "--tsb-hs": "7.3", "--tsb-ds": "1.9", "--tsb-top": "1.8", "--tsb-mhs": "10", "--tsb-mds": "4.2", "--tsb-mtop": "10", "--tsb-mh": "150" } as CSSProperties}>
    <div className={"tsb__card"}>
    <div className={"tsb__img tsb__img--lcp"} data-enter={"bottom"} style={{ "--i": "0", "--l": "15.7", "--t": "36.4", "--w": "69.4", "--z": "2", "--ml": "0", "--mt": "50", "--mw": "100" } as CSSProperties}>
    <img src={"/toyshutch/d589276fcb5b1f1f.png"} width={"1600"} height={"784"} loading={"eager"} fetchPriority={"high"} sizes={"(max-width: 749px) calc(1.0 * (100vw - 28px)), min(calc(0.694 * (100vw - 40px)), 1332px)"}/>
    </div>
    <div className={"tsb__img"} data-enter={"left"} style={{ "--i": "1", "--l": "-5.9", "--t": "22", "--w": "17.1", "--z": "1", "--ml": "-8", "--mt": "22", "--mw": "26" } as CSSProperties}>
    <img src={"/toyshutch/51b3f765eaa48825.png"} width={"1600"} height={"2831"} loading={"eager"} fetchPriority={"auto"} sizes={"(max-width: 749px) calc(0.26 * (100vw - 28px)), min(calc(0.171 * (100vw - 40px)), 328px)"}/>
    </div>
    <div className={"tsb__img tsb__img--float"} data-enter={"fade"} style={{ "--i": "2", "--l": "12", "--t": "32.3", "--w": "14.4", "--z": "4", "--ml": "3", "--mt": "36", "--mw": "25" } as CSSProperties}>
    <img src={"/toyshutch/8c3004d9f346f845.png"} width={"1600"} height={"1925"} loading={"eager"} fetchPriority={"auto"} sizes={"(max-width: 749px) calc(0.25 * (100vw - 28px)), min(calc(0.144 * (100vw - 40px)), 276px)"}/>
    </div>
    <div className={"tsb__img"} data-enter={"right"} style={{ "--i": "3", "--l": "87.4", "--t": "15.5", "--w": "19.1", "--z": "1", "--ml": "82", "--mt": "20", "--mw": "27" } as CSSProperties}>
    <img src={"/toyshutch/18b5bc06f4149773.png"} width={"1600"} height={"1957"} loading={"eager"} fetchPriority={"auto"} sizes={"(max-width: 749px) calc(0.27 * (100vw - 28px)), min(calc(0.191 * (100vw - 40px)), 367px)"}/>
    </div>
    <div className={"tsb__img tsb__img--float"} data-enter={"fade"} style={{ "--i": "4", "--l": "72.5", "--t": "30.2", "--w": "14.2", "--z": "4", "--ml": "70", "--mt": "35", "--mw": "28" } as CSSProperties}>
    <img src={"/toyshutch/1937d683be49a027.png"} width={"1600"} height={"1463"} loading={"eager"} fetchPriority={"auto"} sizes={"(max-width: 749px) calc(0.28 * (100vw - 28px)), min(calc(0.142 * (100vw - 40px)), 273px)"}/>
    </div>
    <div className={"tsb__content"} data-enter={"up"}>
    <h2 className={"tsb__heading"}>
    <svg className={"tsb__accent tsb__accent--left"} viewBox={"0 0 32 44"} aria-hidden={"true"} focusable={"false"}>
    <path d={"M27 12 L8 3 M29 23 L3 23 M27 34 L9 42"}>
    </path>
    </svg>
    <svg className={"tsb__accent tsb__accent--right"} viewBox={"0 0 32 44"} aria-hidden={"true"} focusable={"false"}>
    <path d={"M27 12 L8 3 M29 23 L3 23 M27 34 L9 42"}>
    </path>
    </svg>
    <span className={"visually-hidden"}>{"11:11 Sale is Live"}</span>
    <svg className={"tsb__curve"} viewBox={"0 0 1000 175"} aria-hidden={"true"} focusable={"false"}>
    <defs>
    <path id={"tsb-curve-template--23854282113283__toyshutch-sale-banner"} d={"M0 125 Q500 97 1000 125"}>
    </path>
    </defs>
    <text>
    <textPath href={"#tsb-curve-template--23854282113283__toyshutch-sale-banner"} startOffset={"50%"} textAnchor={"middle"}>{"11:11 Sale is Live"}</textPath>
    </text>
    </svg>
    </h2>
    <div className={"tsb__description rte"}>
    <p>{"Adorable plushies, special prices, and cozy gifts delivered across Pakistan."}</p>
    </div>
    <div className={"tsb__actions"}>
    <Link className={"tsb__btn tsb__btn--one"} href={"/collections/all?view=sale"} prefetch={false}>{"\n              Shop Sale"}<span aria-hidden={"true"}>{"→"}</span>
    </Link>
    <Link className={"tsb__btn tsb__btn--two"} href={"/collections/plushies"} prefetch={false}>{"\n              Shop Plushies"}<span aria-hidden={"true"}>{"→"}</span>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </section>);
}
