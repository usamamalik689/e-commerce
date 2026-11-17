import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsWhyGenZLovesStuffedAnimalsContent";
export default function BlogsNewsWhyGenZLovesStuffedAnimalsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/why-gen-z-loves-stuffed-animals"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
