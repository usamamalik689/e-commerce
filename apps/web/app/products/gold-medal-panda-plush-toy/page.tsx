import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsGoldMedalPandaPlushToyPage";
export const metadata: Metadata = { title: "Gold Medal Panda Plush Toy | Champion Panda\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
