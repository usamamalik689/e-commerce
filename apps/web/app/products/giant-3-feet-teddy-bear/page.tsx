import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsGiant3FeetTeddyBearPage";
export const metadata: Metadata = { title: "Giant 3 Feet Teddy Bear | Premium Stuffed Toy\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
