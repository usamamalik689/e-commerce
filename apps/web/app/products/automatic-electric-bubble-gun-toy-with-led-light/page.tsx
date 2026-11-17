import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsAutomaticElectricBubbleGunToyWithLedLightPage";
export const metadata: Metadata = { title: "Automatic Electric Bubble Gun Toy with LED Light\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
