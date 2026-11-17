import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsCutePandaPlushToyContent";
export default function ProductsCutePandaPlushToyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/cute-panda-plush-toy"} variants={[{"id":49277061923075,"title":"25cm","available":true,"options":["25cm"],"price":232100,"compare_at_price":269900},{"id":49277061955843,"title":"45cm","available":true,"options":["45cm"],"price":382600,"compare_at_price":444900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
