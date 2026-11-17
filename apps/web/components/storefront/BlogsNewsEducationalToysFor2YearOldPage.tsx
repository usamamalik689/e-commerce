import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsEducationalToysFor2YearOldContent";
export default function BlogsNewsEducationalToysFor2YearOldPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/educational-toys-for-2-year-old"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
