import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsFlyingArmorElectricBubbleBlasterToyBubbleGunContent";
export default function ProductsFlyingArmorElectricBubbleBlasterToyBubbleGunPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/flying-armor-electric-bubble-blaster-toy-bubble-gun"} variants={[{"id":50313382396163,"title":"Default Title","available":true,"options":["Default Title"],"price":200000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
