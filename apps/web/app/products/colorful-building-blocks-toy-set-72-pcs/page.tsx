import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsColorfulBuildingBlocksToySet72PcsPage";
export const metadata: Metadata = { title: "Colorful Building Blocks Toy Set | 72 Pcs Puzzle Blocks\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
