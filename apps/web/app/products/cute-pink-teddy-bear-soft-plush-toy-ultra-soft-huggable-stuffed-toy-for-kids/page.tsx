import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCutePinkTeddyBearSoftPlushToyUltraSoftHuggableStuffedToyForKidsPage";
export const metadata: Metadata = { title: "Big Eyes Panda Bear Plush Toy | Soft Cotton Stuffed Panda\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
