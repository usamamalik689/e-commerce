import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsLcdDrawingTablet16InchContent";
export default function ProductsLcdDrawingTablet16InchPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/lcd-drawing-tablet-16-inch"} variants={[{"id":50071644340483,"title":"Default Title","available":true,"options":["Default Title"],"price":149900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
