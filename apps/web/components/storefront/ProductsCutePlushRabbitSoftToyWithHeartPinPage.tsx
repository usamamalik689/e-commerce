import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsCutePlushRabbitSoftToyWithHeartPinContent";
export default function ProductsCutePlushRabbitSoftToyWithHeartPinPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/cute-plush-rabbit-soft-toy-with-heart-pin"} variants={[{"id":49277058941187,"title":"Yellow / 35cm","available":true,"options":["Yellow","35cm"],"price":283700,"compare_at_price":329900},{"id":49418034905347,"title":"Purple / 35cm","available":true,"options":["Purple","35cm"],"price":283700,"compare_at_price":329900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
