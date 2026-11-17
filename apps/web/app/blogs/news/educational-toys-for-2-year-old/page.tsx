import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsEducationalToysFor2YearOldPage";
export const metadata: Metadata = { title: "What Educational Toys Are Best for a 2 Year Old?\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
