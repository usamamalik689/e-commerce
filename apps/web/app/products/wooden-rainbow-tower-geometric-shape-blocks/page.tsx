import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWoodenRainbowTowerGeometricShapeBlocksPage";
export const metadata: Metadata = { title: "Wooden Rainbow Tower | Geometric Shape Blocks for Kids\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
