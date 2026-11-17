import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsWoodenWhiteAndBlackDrawingBoardWithAbacusContent";
export default function ProductsWoodenWhiteAndBlackDrawingBoardWithAbacusPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/wooden-white-and-black-drawing-board-with-abacus"} variants={[{"id":50072197464323,"title":"Default Title","available":true,"options":["Default Title"],"price":139900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
