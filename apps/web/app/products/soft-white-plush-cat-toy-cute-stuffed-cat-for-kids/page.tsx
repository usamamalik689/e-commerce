import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSoftWhitePlushCatToyCuteStuffedCatForKidsPage";
export const metadata: Metadata = { title: "Soft White Plush Cat Toy – Cute Stuffed Cat for Kids\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
