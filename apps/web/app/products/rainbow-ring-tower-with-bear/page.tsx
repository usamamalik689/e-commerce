import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsRainbowRingTowerWithBearPage";
export const metadata: Metadata = { title: "Rainbow Ring Tower | Bear Ring Stacking Toy for Kids\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
