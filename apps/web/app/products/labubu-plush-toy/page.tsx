import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsLabubuPlushToyPage";
export const metadata: Metadata = { title: "Labubu Plush Doll Toy – Purple Monster Plush | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
