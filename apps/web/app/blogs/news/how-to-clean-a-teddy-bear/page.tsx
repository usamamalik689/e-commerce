import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsHowToCleanATeddyBearPage";
export const metadata: Metadata = { title: "How to Clean a Teddy Bear?\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
