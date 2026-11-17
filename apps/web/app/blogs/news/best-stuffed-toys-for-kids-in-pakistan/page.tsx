import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsBestStuffedToysForKidsInPakistanPage";
export const metadata: Metadata = { title: "10 Best Stuffed Toys for Kids in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
