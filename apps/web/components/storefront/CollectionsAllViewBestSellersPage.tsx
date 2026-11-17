import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsAllViewBestSellersContent";
export default function CollectionsAllViewBestSellersPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-6865be9de453cc6d.css"} />
<StoreInteractions route={"/collections/all"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
