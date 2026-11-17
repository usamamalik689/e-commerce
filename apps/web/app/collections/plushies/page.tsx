import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsPlushiesPage";
import Page1 from "@/components/storefront/CollectionsPlushiesViewCategoryPage";
export const metadata: Metadata = { title: "Buy Plushies Online in Pakistan | Cute Plush Toys | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["view"] === "category") return <Page1 />;
return <Page0 />;
}
