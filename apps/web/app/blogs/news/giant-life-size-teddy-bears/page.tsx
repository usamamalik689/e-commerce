import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsGiantLifeSizeTeddyBearsPage";
export const metadata: Metadata = { title: "Giant Life Size Teddy Bears Online in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
