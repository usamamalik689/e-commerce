import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CheckoutContent";
export default function CheckoutPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-a9c53ede957d8469.css"} />
<StoreInteractions route={"/checkout"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
