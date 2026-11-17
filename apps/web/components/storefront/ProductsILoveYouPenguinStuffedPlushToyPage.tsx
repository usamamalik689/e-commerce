import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsILoveYouPenguinStuffedPlushToyContent";
export default function ProductsILoveYouPenguinStuffedPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/i-love-you-penguin-stuffed-plush-toy"} variants={[{"id":49281730674947,"title":"25cm","available":true,"options":["25cm"],"price":236400,"compare_at_price":274900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
