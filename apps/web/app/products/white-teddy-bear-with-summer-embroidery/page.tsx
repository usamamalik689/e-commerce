import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWhiteTeddyBearWithSummerEmbroideryPage";
export const metadata: Metadata = { title: "White Teddy Bear with Summer Embroidery – Soft Peach Plush Bear\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
