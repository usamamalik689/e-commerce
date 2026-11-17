import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsStrawberryBunnyPlushToyWhitePinkScentedSoftBunnyStuffedToyPage";
export const metadata: Metadata = { title: "Lilly Pink Plush Toy – Soft Huggable Stuffed Toy for Kids | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
