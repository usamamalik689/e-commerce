import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsPandaStuffToyPage";
import Page1 from "@/components/storefront/CollectionsPandaStuffToyViewCategoryPage";
export const metadata: Metadata = { title: "Panda Stuff Toy – Soft & Cuddly Pandas for Every Age\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["view"] === "category") return <Page1 />;
return <Page0 />;
}
