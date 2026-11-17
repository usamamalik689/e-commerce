import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsHowToGiftPackATeddyBearPage";
export const metadata: Metadata = { title: "How to Gift Pack a Teddy Bear in 3 Easy Ways\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
