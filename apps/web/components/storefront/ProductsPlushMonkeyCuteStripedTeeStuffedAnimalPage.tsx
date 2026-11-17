import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsPlushMonkeyCuteStripedTeeStuffedAnimalContent";
export default function ProductsPlushMonkeyCuteStripedTeeStuffedAnimalPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/plush-monkey-cute-striped-tee-stuffed-animal"} variants={[{"id":49277072441603,"title":"35cm","available":false,"options":["35cm"],"price":171900,"compare_at_price":199900},{"id":49809757667587,"title":"45cm","available":true,"options":["45cm"],"price":319900,"compare_at_price":199900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
