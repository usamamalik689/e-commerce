import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsBambooPandaPlushToyContent";
export default function ProductsBambooPandaPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/bamboo-panda-plush-toy"} variants={[{"id":49281998455043,"title":"35cm","available":true,"options":["35cm"],"price":349900,"compare_at_price":398800},{"id":49632756236547,"title":"50cm","available":true,"options":["50cm"],"price":549900,"compare_at_price":398800}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
