import Link from "next/link";
export default function SharedSection() {
    return (<div className={"sep-pdp__modal"} data-sep-addons={""} hidden={true} role={"dialog"} aria-modal={"true"} aria-labelledby={"SepAddonsTitle-template--23854184628483__main"}>
    <div className={"sep-pdp__modal-panel"}>
    <button className={"sep-pdp__modal-close"} type={"button"} aria-label={"Close"} data-sep-addons-close={""}>{"×"}</button>
    <h2 className={"sep-pdp__modal-title"} id={"SepAddonsTitle-template--23854184628483__main"}>{"Complete your gift with these add-ons"}</h2>
    <p className={"sep-pdp__modal-sub"}>{"Popular pairings our customers love — pick any, or skip"}</p>
    <ul className={"sep-pdp__addon-list"} role={"list"}>
    <li className={"sep-pdp__addon"} data-sep-addon={""} data-variant={"49620647837955"} data-single={"true"}>
    <label className={"sep-pdp__addon-check"}>
    <input type={"checkbox"} data-sep-addon-check={""} aria-label={"Add Gift Wrap"}/>
    <span className={"sep-pdp__addon-box"} aria-hidden={"true"}>
    </span>
    </label>
    <img src={"/toyshutch/f41588210f871083.png"} alt={""} width={"120"} height={"120"} loading={"lazy"} className={"sep-pdp__addon-img"} sizes={"60px"}/>
    <span className={"sep-pdp__addon-text"}>
    <strong>{"Gift Wrap"}</strong>
    <span>{"Rs.599"}</span>
    </span>
    <input type={"hidden"} defaultValue={"1"} data-sep-addon-qty-input={""}/>
    </li>
    <li className={"sep-pdp__addon"} data-sep-addon={""} data-variant={"50266209681667"} data-single={"true"}>
    <label className={"sep-pdp__addon-check"}>
    <input type={"checkbox"} data-sep-addon-check={""} aria-label={"Add Chocolate"}/>
    <span className={"sep-pdp__addon-box"} aria-hidden={"true"}>
    </span>
    </label>
    <img src={"/toyshutch/0f8dc2fa60f3aa9a.webp"} alt={""} width={"120"} height={"120"} loading={"lazy"} className={"sep-pdp__addon-img"} sizes={"60px"}/>
    <span className={"sep-pdp__addon-text"}>
    <strong>{"Chocolate"}</strong>
    <span>{"Rs.999"}</span>
    </span>
    <input type={"hidden"} defaultValue={"1"} data-sep-addon-qty-input={""}/>
    </li>
    <li className={"sep-pdp__addon"} data-sep-addon={""} data-variant={"50266203619587"} data-single={"true"}>
    <label className={"sep-pdp__addon-check"}>
    <input type={"checkbox"} data-sep-addon-check={""} aria-label={"Add Artificial Flowers"}/>
    <span className={"sep-pdp__addon-box"} aria-hidden={"true"}>
    </span>
    </label>
    <img src={"/toyshutch/8ce73c1010d12354.webp"} alt={""} width={"120"} height={"120"} loading={"lazy"} className={"sep-pdp__addon-img"} sizes={"60px"}/>
    <span className={"sep-pdp__addon-text"}>
    <strong>{"Artificial Flowers"}</strong>
    <span>{"Rs.599"}</span>
    </span>
    <input type={"hidden"} defaultValue={"1"} data-sep-addon-qty-input={""}/>
    </li>
    </ul>
    <div className={"sep-pdp__modal-actions"}>
    <button className={"sep-pdp__btn sep-pdp__btn--ghost"} type={"button"} data-sep-addons-skip={""}>{"Skip"}</button>
    <button className={"sep-pdp__btn sep-pdp__btn--solid"} type={"button"} data-sep-addons-confirm={""} disabled={true}>{"Add & Continue"}</button>
    </div>
    </div>
    </div>);
}
