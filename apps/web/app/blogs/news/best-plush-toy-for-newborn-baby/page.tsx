import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsBestPlushToyForNewbornBabyPage";
export const metadata: Metadata = { title: "Best Plush Toy for a Newborn Baby\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
