import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsMilkBottleBabyBunnyPlushToyPage";
export const metadata: Metadata = { title: "Milk Bottle Baby Bunny Plush Toy – Soft Pink Bunny Gift\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
