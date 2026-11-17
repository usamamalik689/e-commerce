import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsMagneticSticksBlocksSet36PcsBuildingBlocksPage";
export const metadata: Metadata = { title: "Magnetic Sticks Blocks Set | 36 Pcs Building Blocks\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
