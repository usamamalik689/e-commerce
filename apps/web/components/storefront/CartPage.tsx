import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CartContent";
export default function CartPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-3c74306a8517475c.css"} />
<StoreInteractions route={"/cart"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
