import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWooden123NumbersBoardForKidsPage";
export const metadata: Metadata = { title: "Wooden 123 Numbers Board for Kids | Number Puzzle Board\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
