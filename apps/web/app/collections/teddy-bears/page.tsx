import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsTeddyBearsPage";
import Page1 from "@/components/storefront/CollectionsTeddyBearsViewCategoryPage";
import Page2 from "@/components/storefront/CollectionsTeddyBearsPage2Page";
import Page3 from "@/components/storefront/CollectionsTeddyBearsViewCategoryPage2Page";
import Page4 from "@/components/storefront/CollectionsTeddyBearsPage1Page";
import Page5 from "@/components/storefront/CollectionsTeddyBearsViewCategoryPage1Page";
export const metadata: Metadata = { title: "Buy Teddy Bears Online in Pakistan | Plush Soft Toys | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["view"] === "category" && query["page"] === "2") return <Page3 />;
if (query["view"] === "category" && query["page"] === "1") return <Page5 />;
if (query["view"] === "category") return <Page1 />;
if (query["page"] === "2") return <Page2 />;
if (query["page"] === "1") return <Page4 />;
return <Page0 />;
}
