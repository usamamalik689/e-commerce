import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsStuffedAnimalsPage";
import Page1 from "@/components/storefront/CollectionsStuffedAnimalsViewCategoryPage";
import Page2 from "@/components/storefront/CollectionsStuffedAnimalsPage2Page";
import Page3 from "@/components/storefront/CollectionsStuffedAnimalsViewCategoryPage2Page";
import Page4 from "@/components/storefront/CollectionsStuffedAnimalsPage1Page";
import Page5 from "@/components/storefront/CollectionsStuffedAnimalsViewCategoryPage1Page";
export const metadata: Metadata = { title: "Buy Stuffed Animals Online in Pakistan | Soft Toys | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["view"] === "category" && query["page"] === "2") return <Page3 />;
if (query["view"] === "category" && query["page"] === "1") return <Page5 />;
if (query["view"] === "category") return <Page1 />;
if (query["page"] === "2") return <Page2 />;
if (query["page"] === "1") return <Page4 />;
return <Page0 />;
}
