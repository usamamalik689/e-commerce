import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsDancingCactusMusicalToyWithLightsAndSoundContent";
export default function ProductsDancingCactusMusicalToyWithLightsAndSoundPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/dancing-cactus-musical-toy-with-lights-and-sound"} variants={[{"id":50071107010819,"title":"Default Title","available":true,"options":["Default Title"],"price":129000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
