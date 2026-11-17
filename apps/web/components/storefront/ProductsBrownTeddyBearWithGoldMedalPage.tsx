import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsBrownTeddyBearWithGoldMedalContent";
export default function ProductsBrownTeddyBearWithGoldMedalPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/brown-teddy-bear-with-gold-medal"} variants={[{"id":49577397584131,"title":"35cm","available":true,"options":["35cm"],"price":299900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
