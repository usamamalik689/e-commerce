import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsIntelligenceStudyBookForKidsWithSoundAndPenContent";
export default function ProductsIntelligenceStudyBookForKidsWithSoundAndPenPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/intelligence-study-book-for-kids-with-sound-and-pen"} variants={[{"id":50300527739139,"title":"Default Title","available":true,"options":["Default Title"],"price":200000,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
