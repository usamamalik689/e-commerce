import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsBestBirthdayGiftForGirlfriendContent";
export default function BlogsNewsBestBirthdayGiftForGirlfriendPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/best-birthday-gift-for-girlfriend"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
