import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsKawaiiLinaPinkHoodieTeddySoftPlushBearContent";
export default function ProductsKawaiiLinaPinkHoodieTeddySoftPlushBearPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/kawaii-lina-pink-hoodie-teddy-soft-plush-bear"} variants={[{"id":49297470193923,"title":"Pink / 35cm","available":true,"options":["Pink","35cm"],"price":292300,"compare_at_price":339900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
