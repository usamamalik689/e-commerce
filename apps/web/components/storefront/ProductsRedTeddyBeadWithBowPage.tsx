import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsRedTeddyBeadWithBowContent";
export default function ProductsRedTeddyBeadWithBowPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/red-teddy-bead-with-bow"} variants={[{"id":49281584496899,"title":"Red / 2ft","available":true,"options":["Red","2ft"],"price":499900,"compare_at_price":580000}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
