import StoreCarousel from "@/components/shared/store-carousel";
import type { CSSProperties } from "react";
export default function Testimonials() {
    return (<section id={"shopify-section-template--23854282113283__toyshutch-testimonials"} className={"shopify-section section-sep-testimonials"}>
    <section id={"sep-testimonials-template--23854282113283__toyshutch-testimonials"} className={"sep-testimonials"} style={{ "--sep-tm-bg": "#2ba8d9", "--sep-tm-heading": "#ffffff", "--sep-tm-badge-bg": "#e02626", "--sep-tm-badge-color": "#ffffff" } as CSSProperties}>
    <div className={"sep-testimonials__card"}>
    <div className={"sep-testimonials__decor sep-testimonials__decor--top-right"} aria-hidden={"true"}>
    <img src={"/toyshutch/842c3cdaa21ac2d9.png"} alt={""} width={"600"} height={"553"} loading={"lazy"} sizes={"200px"}/>
    </div>
    <div className={"sep-testimonials__header"}>
    <h2 className={"sep-testimonials__heading"}>
    <span className={"sep-testimonials__line sep-testimonials__line--first"}>
    <span>{"What"}</span>
    <span className={"sep-testimonials__badge"}>
    <span className={"sep-testimonials__badge-text"}>{"Our"}</span>
    </span>
    </span>
    <span className={"sep-testimonials__line sep-testimonials__line--second"}>{"Clients Say"}</span>
    </h2>
    <div className={"sep-testimonials__arrow"} aria-hidden={"true"}>
    <img src={"/toyshutch/49f74206a4fc145c.png"} alt={""} width={"600"} height={"497"} loading={"lazy"} sizes={"300px"}/>
    </div>
    </div>
    <StoreCarousel kind="testimonials" label="What Our Clients Say">
    <li className={"sep-testimonials__item"}>
    <figure className={"sep-testimonials__quote"}>
    <blockquote className={"sep-testimonials__text"}>{"Amazing experience with Toys Hutch. The quality was really good, and I loved the product. The staff was cooperative and helpful, and everything was handled nicely. Highly recommended"}</blockquote>
    <figcaption className={"sep-testimonials__name"}>{"Memona"}</figcaption>
    <span className={"sep-testimonials__avatar"}>
    <img src={"/toyshutch/e4b1dcd57d6dc6dc.png"} alt={""} width={"300"} height={"302"} loading={"lazy"} sizes={"80px"}/>
    </span>
    </figure>
    </li>
    <li className={"sep-testimonials__item"}>
    <figure className={"sep-testimonials__quote"}>
    <blockquote className={"sep-testimonials__text"}>{"I received the penguin stuff toy within one day and must say it’s amazingggg, quality wise 10/10. Super cute n soft. Will be purchasing more in future."}</blockquote>
    <figcaption className={"sep-testimonials__name"}>{"Anum Irfan"}</figcaption>
    <span className={"sep-testimonials__avatar"}>
    <img src={"/toyshutch/e4b1dcd57d6dc6dc.png"} alt={""} width={"300"} height={"302"} loading={"lazy"} sizes={"80px"}/>
    </span>
    </figure>
    </li>
    <li className={"sep-testimonials__item"}>
    <figure className={"sep-testimonials__quote"}>
    <blockquote className={"sep-testimonials__text"}>{"I was surprised when I received this mind-blowing toy.That's was amazing 😍"}</blockquote>
    <figcaption className={"sep-testimonials__name"}>{"Rehman Yousaf"}</figcaption>
    <span className={"sep-testimonials__avatar"}>
    <img src={"/toyshutch/e4b1dcd57d6dc6dc.png"} alt={""} width={"300"} height={"302"} loading={"lazy"} sizes={"80px"}/>
    </span>
    </figure>
    </li>
    </StoreCarousel>
    </div>
    </section>
    </section>);
}
