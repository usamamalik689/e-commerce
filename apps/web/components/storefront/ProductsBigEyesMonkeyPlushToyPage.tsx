import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsBigEyesMonkeyPlushToyContent";
export default function ProductsBigEyesMonkeyPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/big-eyes-monkey-plush-toy"} variants={[{"id":49641117810947,"title":"Pink","available":true,"options":["Pink"],"price":269900,"compare_at_price":null},{"id":49641117843715,"title":"Brown","available":true,"options":["Brown"],"price":269900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
