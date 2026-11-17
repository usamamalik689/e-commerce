import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsLabubuPlushToyContent";
export default function ProductsLabubuPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/labubu-plush-toy"} variants={[{"id":49297477206275,"title":"Purple / 20cm","available":true,"options":["Purple","20cm"],"price":149900,"compare_at_price":199900},{"id":49297477239043,"title":"White / 20cm","available":true,"options":["White","20cm"],"price":149900,"compare_at_price":199900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
