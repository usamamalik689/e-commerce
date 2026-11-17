import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSpidermanPlushToyPage";
export const metadata: Metadata = { title: "Spiderman Plush Toy – Soft Superhero Stuffed Toy | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
