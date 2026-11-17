import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsGirlsMakeupAndBeautyGiftSetKidsMakeupHandbagKitContent";
export default function ProductsGirlsMakeupAndBeautyGiftSetKidsMakeupHandbagKitPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/girls-makeup-and-beauty-gift-set-kids-makeup-handbag-kit"} variants={[{"id":50300496544003,"title":"Default Title","available":true,"options":["Default Title"],"price":200000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
