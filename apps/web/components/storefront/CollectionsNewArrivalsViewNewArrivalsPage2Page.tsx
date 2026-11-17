import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsNewArrivalsViewNewArrivalsPage2Content";
export default function CollectionsNewArrivalsViewNewArrivalsPage2Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-0f3ed0a4a34ab06c.css"} />
<StoreInteractions route={"/collections/new-arrivals"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
