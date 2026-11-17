import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsContent";
export default function CollectionsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-feefccfd346e06fb.css"} />
<StoreInteractions route={"/collections"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
