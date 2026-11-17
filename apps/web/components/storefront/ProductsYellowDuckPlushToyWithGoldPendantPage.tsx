import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsYellowDuckPlushToyWithGoldPendantContent";
export default function ProductsYellowDuckPlushToyWithGoldPendantPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/yellow-duck-plush-toy-with-gold-pendant"} variants={[{"id":49565895196931,"title":"Default Title","available":true,"options":["Default Title"],"price":299900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
