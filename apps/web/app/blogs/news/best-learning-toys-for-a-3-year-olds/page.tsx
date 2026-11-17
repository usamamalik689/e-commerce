import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsBestLearningToysForA3YearOldsPage";
export const metadata: Metadata = { title: "Best Learning Toys for 3 Year Olds in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
