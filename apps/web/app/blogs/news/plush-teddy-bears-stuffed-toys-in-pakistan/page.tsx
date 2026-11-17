import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsPlushTeddyBearsStuffedToysInPakistanPage";
export const metadata: Metadata = { title: "Plush Teddy Bears & Stuffed Toys in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
