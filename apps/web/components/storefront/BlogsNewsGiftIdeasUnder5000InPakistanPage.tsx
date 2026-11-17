import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsGiftIdeasUnder5000InPakistanContent";
export default function BlogsNewsGiftIdeasUnder5000InPakistanPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/gift-ideas-under-5000-in-pakistan"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
