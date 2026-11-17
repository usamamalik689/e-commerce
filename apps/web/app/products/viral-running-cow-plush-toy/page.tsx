import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsViralRunningCowPlushToyPage";
export const metadata: Metadata = { title: "Viral Running Cow Plush Toy in Pakistan | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
