import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCuteMinisoPenguinPlushToyPage";
export const metadata: Metadata = { title: "Cute Miniso Penguin Plush Toy – Soft & Huggable Stuffed Toy\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
