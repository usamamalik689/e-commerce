import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./PagesFrequentlyAskedQuestionsContent";
export default function PagesFrequentlyAskedQuestionsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-192f1858a7b9cd4c.css"} />
<StoreInteractions route={"/pages/frequently-asked-questions"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
