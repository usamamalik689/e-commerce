import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSpecialGiftWrapContent";
export default function ProductsSpecialGiftWrapPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/special-gift-wrap"} variants={[{"id":50266203619587,"title":"Default Title","available":true,"options":["Default Title"],"price":59900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
