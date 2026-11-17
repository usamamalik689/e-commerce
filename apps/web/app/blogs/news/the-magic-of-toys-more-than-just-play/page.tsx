import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsTheMagicOfToysMoreThanJustPlayPage";
export const metadata: Metadata = { title: "The Magic of Toys: More Than Just Play\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
