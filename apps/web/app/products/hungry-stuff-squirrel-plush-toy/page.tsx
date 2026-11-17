import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsHungryStuffSquirrelPlushToyPage";
export const metadata: Metadata = { title: "Hungry Stuff Squirrel Plush Toy – ToysHutch Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
