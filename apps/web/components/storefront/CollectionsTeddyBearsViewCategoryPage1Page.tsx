import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./CollectionsTeddyBearsViewCategoryContent";
export default function CollectionsTeddyBearsViewCategoryPage1Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-9f42a62e9ebb468b.css"} />
<StoreInteractions route={"/collections/teddy-bears"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
