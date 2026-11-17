import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsDuckPlushToyCuteSoftStuffedDuckForKidsPage";
export const metadata: Metadata = { title: "Cute Duck Plush Toy | Soft Stuffed Duck for Kids | Toys Hutch Pakistan" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
