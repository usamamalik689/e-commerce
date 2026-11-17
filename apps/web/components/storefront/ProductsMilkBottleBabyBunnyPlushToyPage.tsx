import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsMilkBottleBabyBunnyPlushToyContent";
export default function ProductsMilkBottleBabyBunnyPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/milk-bottle-baby-bunny-plush-toy"} variants={[{"id":49417970123011,"title":"Default Title","available":true,"options":["Default Title"],"price":215000,"compare_at_price":250000}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
