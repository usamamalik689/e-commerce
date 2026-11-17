import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsBlueHoodieTeddyBearCuteStuffedTeddyWithCapContent";
export default function ProductsBlueHoodieTeddyBearCuteStuffedTeddyWithCapPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/blue-hoodie-teddy-bear-cute-stuffed-teddy-with-cap"} variants={[{"id":50300594913539,"title":"20cm","available":true,"options":["20cm"],"price":199900,"compare_at_price":249900},{"id":49297317724419,"title":"25cm","available":true,"options":["25cm"],"price":257900,"compare_at_price":299900},{"id":49371715371267,"title":"50cm","available":true,"options":["50cm"],"price":409900,"compare_at_price":550000}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
