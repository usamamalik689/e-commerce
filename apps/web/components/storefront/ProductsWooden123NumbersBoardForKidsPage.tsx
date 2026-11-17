import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsWooden123NumbersBoardForKidsContent";
export default function ProductsWooden123NumbersBoardForKidsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/wooden-123-numbers-board-for-kids"} variants={[{"id":50070591078659,"title":"Default Title","available":true,"options":["Default Title"],"price":129000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
