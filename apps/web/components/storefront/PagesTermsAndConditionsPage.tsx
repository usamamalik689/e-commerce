import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./PagesTermsAndConditionsContent";
export default function PagesTermsAndConditionsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-e9dc74612ec06af0.css"} />
<StoreInteractions route={"/pages/terms-and-conditions"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
