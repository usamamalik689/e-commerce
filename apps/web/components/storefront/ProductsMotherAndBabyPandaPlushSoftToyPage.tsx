import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsMotherAndBabyPandaPlushSoftToyContent";
export default function ProductsMotherAndBabyPandaPlushSoftToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/mother-and-baby-panda-plush-soft-toy"} variants={[{"id":49281622114563,"title":"25cm","available":true,"options":["25cm"],"price":240700,"compare_at_price":279900},{"id":49591099916547,"title":"45cm","available":true,"options":["45cm"],"price":319900,"compare_at_price":279900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
