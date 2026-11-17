import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsGoldMedalPandaPlushToyContent";
export default function ProductsGoldMedalPandaPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/gold-medal-panda-plush-toy"} variants={[{"id":50044439560451,"title":"35cm","available":true,"options":["35cm"],"price":299900,"compare_at_price":350000}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
