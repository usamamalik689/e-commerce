import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSheepPlushToySoftLambStuffedAnimalContent";
export default function ProductsSheepPlushToySoftLambStuffedAnimalPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/sheep-plush-toy-soft-lamb-stuffed-animal"} variants={[{"id":49701497667843,"title":"White / 30cm","available":true,"options":["White","30cm"],"price":249900,"compare_at_price":339900},{"id":49281716060419,"title":"White / 50cm","available":true,"options":["White","50cm"],"price":292300,"compare_at_price":339900},{"id":49701497897219,"title":"Brown / 30cm","available":true,"options":["Brown","30cm"],"price":249900,"compare_at_price":339900},{"id":49701497864451,"title":"Brown / 50cm","available":true,"options":["Brown","50cm"],"price":292300,"compare_at_price":339900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
