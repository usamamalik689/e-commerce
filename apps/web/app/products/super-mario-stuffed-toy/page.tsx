import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSuperMarioStuffedToyPage";
export const metadata: Metadata = { title: "Super Mario Stuffed Toy - Cute Luigi Plush Toy\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
