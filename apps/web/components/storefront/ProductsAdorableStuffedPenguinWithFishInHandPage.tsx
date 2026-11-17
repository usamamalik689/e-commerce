import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsAdorableStuffedPenguinWithFishInHandContent";
export default function ProductsAdorableStuffedPenguinWithFishInHandPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/adorable-stuffed-penguin-with-fish-in-hand"} variants={[{"id":49277174907139,"title":"35cm","available":true,"options":["35cm"],"price":214900,"compare_at_price":249900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
