import ProductCard from "@/features/catalog/components/product-card";
import { catalogBySlug as productsBySlug } from "@/data/catalog";
import Link from "next/link";
export default function NewArrivals() {
    return (<section id={"shopify-section-template--23854282113283__new-arrivals"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854282113283__new-arrivals"} className={"sep-products"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"New Arrivals"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Just landed, get yours before they're gone."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/new-arrivals?view=new-arrivals"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["bamboo-panda-plush-toy"]}/>
    <ProductCard product={productsBySlug["mother-and-baby-panda-plush-soft-toy"]}/>
    <ProductCard product={productsBySlug["fluffy-big-eyes-panda-bear-plush-toy-soft-cotton-panda-stuffed-animal-for-kids"]}/>
    <ProductCard product={productsBySlug["soft-doraemon-stuffed-toy-plush-gift"]}/>
    </div>
    </div>
    </section>
    </section>);
}
