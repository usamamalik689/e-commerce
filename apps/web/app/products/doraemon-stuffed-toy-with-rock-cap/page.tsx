import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsDoraemonStuffedToyWithRockCapPage";
export const metadata: Metadata = { title: "Doraemon Stuffed Toy with Rock Cap\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
