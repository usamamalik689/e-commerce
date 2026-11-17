import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsMotherAndBabyPandaPlushSoftToyPage";
export const metadata: Metadata = { title: "Mother and Baby Panda Plush Soft Toy | Buy in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
