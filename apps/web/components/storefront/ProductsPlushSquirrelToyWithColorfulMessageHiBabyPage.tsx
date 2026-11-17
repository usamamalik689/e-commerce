import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsPlushSquirrelToyWithColorfulMessageHiBabyContent";
export default function ProductsPlushSquirrelToyWithColorfulMessageHiBabyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/plush-squirrel-toy-with-colorful-message-hi-baby"} variants={[{"id":49281702887683,"title":"35cm","available":true,"options":["35cm"],"price":309500,"compare_at_price":359900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
