export default function ProductTabs() {
    return (<div className={"sep-pdp__card sep-pdp__tabs"} data-sep-tabs={""}>
    <div className={"sep-pdp__tablist"} role={"tablist"}>
    <button className={"sep-pdp__tab is-active"} type={"button"} role={"tab"} id={"SepTab-tab-1"} aria-selected={"true"} aria-controls={"SepPanel-tab-1"} data-sep-tab={"tab-1"}>
    <span aria-hidden={"true"}>
    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    <path d={"M5 19c0-8 5-13 14-14 0 9-5 14-13 14"}>
    </path>
    <path d={"M5 19c3-5 6-8 10-10"}>
    </path>
    </svg>
    </span>{"\r\n              Care\r\n            "}</button>
    <button className={"sep-pdp__tab"} type={"button"} role={"tab"} id={"SepTab-tab-2"} aria-selected={"false"} aria-controls={"SepPanel-tab-2"} data-sep-tab={"tab-2"}>
    <span aria-hidden={"true"}>
    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    <path d={"M2.5 6.5h10.5v9H2.5z"}>
    </path>
    <path d={"M13 9.5h4l3 3v3h-7"}>
    </path>
    <circle cx={"6.5"} cy={"17"} r={"1.6"}>
    </circle>
    <circle cx={"16.5"} cy={"17"} r={"1.6"}>
    </circle>
    </svg>
    </span>{"\r\n              Shipping / Returns\r\n            "}</button>
    <button className={"sep-pdp__tab"} type={"button"} role={"tab"} id={"SepTab-tab-3"} aria-selected={"false"} aria-controls={"SepPanel-tab-3"} data-sep-tab={"tab-3"}>
    <span aria-hidden={"true"}>
    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    <rect x={"4"} y={"4"} width={"16"} height={"16"} rx={"2"}>
    </rect>
    <path d={"M8 9V8h8v1M12 8v8M10 16h4"}>
    </path>
    </svg>
    </span>{"\r\n              Personalization\r\n            "}</button>
    </div>
    <div className={"sep-pdp__panel rte"} role={"tabpanel"} id={"SepPanel-tab-1"} aria-labelledby={"SepTab-tab-1"}>
    <p>{"To keep your soft plush toy looking and feeling its best, spot clean using a damp cloth with mild, non-bleach detergent. Gently dab the affected area, do not rub. Air dry in a well-ventilated space, away from direct sunlight which can fade colours over time. Avoid machine washing and tumble drying, as heat and agitation can damage the plush fibres. For regular upkeep, a soft brush can restore fluffiness."}</p>
    </div>
    <div className={"sep-pdp__panel rte"} role={"tabpanel"} id={"SepPanel-tab-2"} aria-labelledby={"SepTab-tab-2"} hidden={true}>
    <p>{"Free delivery all over Pakistan with cash on delivery available. Orders arrive in 2 to 4 working days. Easy 7-day exchange if your toy arrives damaged or is not what you ordered."}</p>
    </div>
    <div className={"sep-pdp__panel rte"} role={"tabpanel"} id={"SepPanel-tab-3"} aria-labelledby={"SepTab-tab-3"} hidden={true}>
    <p>{"Choose a ready-made message from the dropdown, or write your own short text. Your message is added to the order and prepared with the gift."}</p>
    </div>
    </div>);
}
