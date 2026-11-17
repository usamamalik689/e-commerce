import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsAbcEarlyLearningAlphabetsBlocksContent";
export default function ProductsAbcEarlyLearningAlphabetsBlocksPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/abc-early-learning-alphabets-blocks"} variants={[{"id":50068674216195,"title":"Default Title","available":true,"options":["Default Title"],"price":99900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
