import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSoftDoraemonStuffedToyPlushGiftPage";
export const metadata: Metadata = { title: "Doraemon Stuffed Toy – Doraemon Plush Toy | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
