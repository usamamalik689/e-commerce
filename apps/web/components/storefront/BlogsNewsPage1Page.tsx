import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsContent";
export default function BlogsNewsPage1Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-907495b077e65f31.css"} />
<StoreInteractions route={"/blogs/news"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
