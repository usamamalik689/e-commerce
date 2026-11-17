import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsStuffedAnimalsContent";
export default function CollectionsStuffedAnimalsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-4f9bfee5824daff9.css"} />
<StoreInteractions route={"/collections/stuffed-animals"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
