import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsTopToysForKids2026Content";
export default function BlogsNewsTopToysForKids2026Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/top-toys-for-kids-2026"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
