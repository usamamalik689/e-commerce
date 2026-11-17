import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsTeddyBearPriceInPakistanPage";
export const metadata: Metadata = { title: "Teddy Bear Price in Pakistan 2026 – Size & Budget Guide\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
