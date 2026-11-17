import type { Metadata } from "next";
import Page0 from "@/components/storefront/SearchPage";
export const metadata: Metadata = { title: "Search\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
