import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsDoraemonStuffedToyWithRockCapContent";
export default function ProductsDoraemonStuffedToyWithRockCapPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/doraemon-stuffed-toy-with-rock-cap"} variants={[{"id":49281987346691,"title":"50cm","available":true,"options":["50cm"],"price":292300,"compare_at_price":339900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
