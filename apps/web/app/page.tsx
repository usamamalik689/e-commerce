import type { Metadata } from "next";
import Page0 from "@/components/storefront/HomePage";
export const metadata: Metadata = { title: "Buy Stuffed Animals & Plush Toys in Pakistan | Toyshutch.pk\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
