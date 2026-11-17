import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsPinkTeddyBearWithHoodieContent";
export default function ProductsPinkTeddyBearWithHoodiePage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/pink-teddy-bear-with-hoodie"} variants={[{"id":49920526450947,"title":"Pink / 25cm","available":true,"options":["Pink","25cm"],"price":258900,"compare_at_price":449900},{"id":49297272897795,"title":"Pink / 50cm","available":true,"options":["Pink","50cm"],"price":359900,"compare_at_price":449900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
