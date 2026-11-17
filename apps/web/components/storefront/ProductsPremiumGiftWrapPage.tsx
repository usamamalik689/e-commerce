import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsPremiumGiftWrapContent";
export default function ProductsPremiumGiftWrapPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/premium-gift-wrap"} variants={[{"id":50266209681667,"title":"Default Title","available":true,"options":["Default Title"],"price":99900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
