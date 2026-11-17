import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsWhatArePlushToysPage";
export const metadata: Metadata = { title: "What Are Plush Toys? Types, Benefits & How to Choose One\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
