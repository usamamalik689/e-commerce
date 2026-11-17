import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsFlyingArmorElectricBubbleBlasterToyBubbleGunPage";
export const metadata: Metadata = { title: "Flying Armor Electric Bubble Blaster Toy | Bubble Gun\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
