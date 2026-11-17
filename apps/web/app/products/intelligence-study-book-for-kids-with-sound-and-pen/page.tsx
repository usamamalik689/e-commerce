import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsIntelligenceStudyBookForKidsWithSoundAndPenPage";
export const metadata: Metadata = { title: "Intelligence Study Book for Kids with Sound and Pen\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
