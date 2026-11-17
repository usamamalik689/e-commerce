import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./PagesAboutUsContent";
export default function PagesAboutUsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-e9dc74612ec06af0.css"} />
<StoreInteractions route={"/pages/about-us"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
