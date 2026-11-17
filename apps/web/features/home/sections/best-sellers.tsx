import ProductCard from "@/features/catalog/components/product-card";
import { catalogBySlug as productsBySlug } from "@/data/catalog";
import Link from "next/link";
export default function BestSellers() {
    return (<section id={"shopify-section-template--23854282113283__best-sellers"} className={"shopify-section section-sep-products"}>
    <section id={"sep-products-template--23854282113283__best-sellers"} className={"sep-products sep-products--background"}>
    <div className={"sep-products__inner"}>
    <div className={"sep-products__header"}>
    <div className={"sep-products__intro"}>
    <h2 className={"sep-products__heading"}>{"Best Sellers"}</h2>
    <div className={"sep-products__description rte"}>
    <p>{"Loved, hugged, and reordered on repeat."}</p>
    </div>
    </div>
    <Link className={"sep-products__view-all"} href={"/collections/all?view=best-sellers&sort_by=best-selling"} prefetch={false}>{"\r\n          View All\r\n        "}</Link>
    </div>
    <div className={"sep-products__grid"}>
    <ProductCard product={productsBySlug["hoodie-panda-teddy-bear-plush-with-cap"]}/>
    <ProductCard product={productsBySlug["blue-hoodie-teddy-bear-cute-stuffed-teddy-with-cap"]}/>
    <ProductCard product={productsBySlug["i-love-you-penguin-stuffed-plush-toy"]}/>
    <ProductCard product={productsBySlug["big-eyes-monkey-plush-toy"]}/>
    </div>
    </div>
    </section>
    </section>);
}
