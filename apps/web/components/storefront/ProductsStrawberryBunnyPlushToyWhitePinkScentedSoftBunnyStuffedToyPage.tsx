import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsStrawberryBunnyPlushToyWhitePinkScentedSoftBunnyStuffedToyContent";
export default function ProductsStrawberryBunnyPlushToyWhitePinkScentedSoftBunnyStuffedToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/strawberry-bunny-plush-toy-white-pink-scented-soft-bunny-stuffed-toy"} variants={[{"id":49277023617283,"title":"Pink","available":true,"options":["Pink"],"price":283700,"compare_at_price":329900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
