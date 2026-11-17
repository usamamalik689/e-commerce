export default function Newsletter() {
    return (<section id={"shopify-section-template--23854282113283__newsletter-cta"} className={"shopify-section section-newsletter-cta"}>
    <section className={"newsletter-cta section-template--23854282113283__newsletter-cta"}>
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
    <form method={"post"} id={"NewsletterCtaForm-template--23854282113283__newsletter-cta"} acceptCharset={"UTF-8"} className={"newsletter-cta__form"} data-success-message={"Thanks for subscribing!"} data-seconds={"5"}>
    <input type={"hidden"} name={"form_type"} defaultValue={"customer"}/>
    <input type={"hidden"} name={"utf8"} defaultValue={"✓"}/>
    <input type={"hidden"} name={"contact[tags]"} defaultValue={"newsletter"}/>
    <div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-email-error={""} hidden={true}>
    </div>
    <div className={"newsletter-cta__message newsletter-cta__message--error"} role={"alert"} data-newsletter-duplicate={""} hidden={true}>{"This email is already subscribed."}</div>
    <div className={"newsletter-cta__fields"}>
    <label className={"visually-hidden"} htmlFor={"NewsletterCtaEmail-template--23854282113283__newsletter-cta"}>{"\r\n              Email\r\n            "}</label>
    <div className={"newsletter-cta__field-combo"}>
    <input id={"NewsletterCtaEmail-template--23854282113283__newsletter-cta"} type={"email"} name={"contact[email]"} className={"newsletter-cta__input"} defaultValue={""} autoCorrect={"off"} autoCapitalize={"off"} autoComplete={"email"} placeholder={"Enter your email"} required={true}/>
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
    </section>);
}
