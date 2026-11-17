import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsHoodiePandaTeddyBearPlushWithCapContent";
export default function ProductsHoodiePandaTeddyBearPlushWithCapPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/hoodie-panda-teddy-bear-plush-with-cap"} variants={[{"id":50044517449987,"title":"50cm","available":true,"options":["50cm"],"price":409900,"compare_at_price":449900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
