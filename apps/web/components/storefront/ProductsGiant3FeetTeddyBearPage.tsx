import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsGiant3FeetTeddyBearContent";
export default function ProductsGiant3FeetTeddyBearPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/giant-3-feet-teddy-bear"} variants={[{"id":49433390776579,"title":"White / 2.5ft","available":true,"options":["White","2.5ft"],"price":549900,"compare_at_price":580000},{"id":49417425125635,"title":"White / 3ft","available":true,"options":["White","3ft"],"price":799900,"compare_at_price":930000},{"id":49433390809347,"title":"Pink / 2.5ft","available":true,"options":["Pink","2.5ft"],"price":549900,"compare_at_price":580000},{"id":49417426469123,"title":"Pink / 3ft","available":true,"options":["Pink","3ft"],"price":799900,"compare_at_price":930000},{"id":49433390842115,"title":"Red / 2.5ft","available":true,"options":["Red","2.5ft"],"price":549900,"compare_at_price":580000},{"id":49433390874883,"title":"Red / 3ft","available":true,"options":["Red","3ft"],"price":799900,"compare_at_price":930000}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
