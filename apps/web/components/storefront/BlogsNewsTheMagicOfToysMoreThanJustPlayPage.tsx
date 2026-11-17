import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsTheMagicOfToysMoreThanJustPlayContent";
export default function BlogsNewsTheMagicOfToysMoreThanJustPlayPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/the-magic-of-toys-more-than-just-play"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
