import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./PagesRefundPolicyContent";
export default function PagesRefundPolicyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-2f23844b0c8ef86d.css"} />
<StoreInteractions route={"/pages/refund-policy"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
