import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";
import StoreInteractions from "@/app/home-interactions";
import Header from "./StoreHeader";
import Footer from "./StoreFooter";
import Content from "./BlogsNewsBestLearningToysForA3YearOldsContent";
export default function BlogsNewsBestLearningToysForA3YearOldsPage() { return <>
<link rel={"stylesheet"} href={"/toyshutch/page-bab801d8c889960c.css"} />
<StoreInteractions route={"/blogs/news/best-learning-toys-for-a-3-year-olds"} variants={[]}>
<Header />
<Content />
<Footer />
</StoreInteractions>
</>; }
