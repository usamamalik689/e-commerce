import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSoftBabyBunnyToyWithMilkBottlePage";
export const metadata: Metadata = { title: "Soft Baby Bunny Toy | Cute Plush Rabbit Toy - ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
