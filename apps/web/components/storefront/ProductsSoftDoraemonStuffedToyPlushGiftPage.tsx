import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSoftDoraemonStuffedToyPlushGiftContent";
export default function ProductsSoftDoraemonStuffedToyPlushGiftPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/soft-doraemon-stuffed-toy-plush-gift"} variants={[{"id":49281967358211,"title":"35cm","available":true,"options":["35cm"],"price":299900,"compare_at_price":249900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
