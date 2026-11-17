import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsWhiteTeddyBearWithSummerEmbroideryContent";
export default function ProductsWhiteTeddyBearWithSummerEmbroideryPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/white-teddy-bear-with-summer-embroidery"} variants={[{"id":49579094671619,"title":"3ft","available":true,"options":["3ft"],"price":799900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
