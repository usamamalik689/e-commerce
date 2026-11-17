import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsViralRunningCowPlushToyContent";
export default function ProductsViralRunningCowPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/viral-running-cow-plush-toy"} variants={[{"id":49962257154307,"title":"35cm","available":true,"options":["35cm"],"price":329900,"compare_at_price":399900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
