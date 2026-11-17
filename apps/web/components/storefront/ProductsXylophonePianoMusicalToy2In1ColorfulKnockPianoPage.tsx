import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsXylophonePianoMusicalToy2In1ColorfulKnockPianoContent";
export default function ProductsXylophonePianoMusicalToy2In1ColorfulKnockPianoPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/xylophone-piano-musical-toy-2-in-1-colorful-knock-piano"} variants={[{"id":50091092869379,"title":"Default Title","available":true,"options":["Default Title"],"price":199000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
