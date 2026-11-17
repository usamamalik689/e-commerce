import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSoftStuffedRedTeddyBearWithCap1Content";
export default function ProductsSoftStuffedRedTeddyBearWithCap1Page() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/soft-stuffed-red-teddy-bear-with-cap-1"} variants={[{"id":50300663496963,"title":"20cm","available":true,"options":["20cm"],"price":199900,"compare_at_price":249900},{"id":49371845427459,"title":"25cm","available":true,"options":["25cm"],"price":257900,"compare_at_price":299900},{"id":49371845394691,"title":"50cm","available":true,"options":["50cm"],"price":409900,"compare_at_price":449900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
