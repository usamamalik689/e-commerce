import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSoftStuffedRedTeddyBearWithCap1Page";
export const metadata: Metadata = { title: "Red Hoodie Teddy Bear | Soft Stuffed Plush Bear for Girls | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
