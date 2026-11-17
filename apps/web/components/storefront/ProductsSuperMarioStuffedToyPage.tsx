import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSuperMarioStuffedToyContent";
export default function ProductsSuperMarioStuffedToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/super-mario-stuffed-toy"} variants={[{"id":49701487935747,"title":"50cm","available":true,"options":["50cm"],"price":399900,"compare_at_price":null},{"id":49701487968515,"title":"35cm","available":true,"options":["35cm"],"price":299900,"compare_at_price":null}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
