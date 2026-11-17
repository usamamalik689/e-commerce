import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsTurtlePlushToyContent";
export default function ProductsTurtlePlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/turtle-plush-toy"} variants={[{"id":50058756456707,"title":"25","available":true,"options":["25"],"price":169900,"compare_at_price":197500}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
