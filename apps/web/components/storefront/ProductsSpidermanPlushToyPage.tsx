import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSpidermanPlushToyContent";
export default function ProductsSpidermanPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/spiderman-plush-toy"} variants={[{"id":49383946322179,"title":"50cm","available":true,"options":["50cm"],"price":346900,"compare_at_price":449900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
