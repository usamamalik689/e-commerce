import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./SearchContent";
export default function SearchPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-5fe813ec69a51b08.css"} />
<StoreInteractions route={"/search"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
