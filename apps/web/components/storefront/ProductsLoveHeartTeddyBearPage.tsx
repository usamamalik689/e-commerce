import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsLoveHeartTeddyBearContent";
export default function ProductsLoveHeartTeddyBearPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/love-heart-teddy-bear"} variants={[{"id":49641132523779,"title":"Beige","available":true,"options":["Beige"],"price":379900,"compare_at_price":null},{"id":49641132556547,"title":"Red","available":true,"options":["Red"],"price":379900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
