import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsTopToysForKids2026Page";
export const metadata: Metadata = { title: "Top Toys for Kids in 2026: Best Picks in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
