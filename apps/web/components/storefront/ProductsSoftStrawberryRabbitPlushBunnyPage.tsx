import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./ProductsSoftStrawberryRabbitPlushBunnyContent";
export default function ProductsSoftStrawberryRabbitPlushBunnyPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-264fe6b3498be7a2.css"} />
<StoreInteractions route={"/products/soft-strawberry-rabbit-plush-bunny"} variants={[{"id":49281554317571,"title":"Strawberry / 25cm","available":true,"options":["Strawberry","25cm"],"price":223500,"compare_at_price":259900},{"id":49281554350339,"title":"Strawberry / 35cm","available":true,"options":["Strawberry","35cm"],"price":301000,"compare_at_price":350000},{"id":49907356172547,"title":"Strawberry / 45cm","available":true,"options":["Strawberry","45cm"],"price":449900,"compare_at_price":499900},{"id":49281554383107,"title":"Carrot / 25cm","available":true,"options":["Carrot","25cm"],"price":223500,"compare_at_price":259900},{"id":49281554415875,"title":"Carrot / 35cm","available":true,"options":["Carrot","35cm"],"price":301000,"compare_at_price":350000},{"id":49907356205315,"title":"Carrot / 45cm","available":true,"options":["Carrot","45cm"],"price":449900,"compare_at_price":499900}]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
