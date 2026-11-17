import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPinkWhiteTeddyBearPlushToyWithSatinBowSoftGiftTeddyForKidsPage";
export const metadata: Metadata = { title: "Pink & White Teddy Bear with Satin Bow | Soft Plush Toy\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
