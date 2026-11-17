import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCuteBrownTeddyBearSoftPlushToyUltraSoftHuggableStuffedToyForKidsPage";
export const metadata: Metadata = { title: "Cute Brown Teddy Bear Plush Toy – Ultra Soft Stuffed Bear\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
