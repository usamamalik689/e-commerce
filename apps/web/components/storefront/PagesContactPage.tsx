import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./PagesContactContent";
export default function PagesContactPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-11656d918302b95b.css"} />
<StoreInteractions route={"/pages/contact"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
