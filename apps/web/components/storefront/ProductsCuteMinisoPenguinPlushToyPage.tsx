import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsCuteMinisoPenguinPlushToyContent";
export default function ProductsCuteMinisoPenguinPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/cute-miniso-penguin-plush-toy"} variants={[{"id":49608183087363,"title":"Default Title","available":true,"options":["Default Title"],"price":399900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
