import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsRainbowRingTowerWithBearContent";
export default function ProductsRainbowRingTowerWithBearPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/rainbow-ring-tower-with-bear"} variants={[{"id":50071017390339,"title":"Default Title","available":true,"options":["Default Title"],"price":99900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
