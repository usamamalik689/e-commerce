import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsAllViewSaleContent";
export default function CollectionsAllViewSalePage1Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-a0dee49a6e83498e.css"} />
<StoreInteractions route={"/collections/all"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
