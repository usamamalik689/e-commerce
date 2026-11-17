import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsAbcEarlyLearningAlphabetsBlocksPage";
export const metadata: Metadata = { title: "ABC Early Learning Alphabets Blocks for Kids | Mama Baba\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
