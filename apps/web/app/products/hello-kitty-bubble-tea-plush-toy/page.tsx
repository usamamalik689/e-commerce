import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsHelloKittyBubbleTeaPlushToyPage";
export const metadata: Metadata = { title: "Hello Kitty Plush Toy – Bubble Tea Stuffed Toy | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
