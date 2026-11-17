import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsColorfulMagneticPipelineBuildingBlockSet42PcsTilesWithBallsPage";
export const metadata: Metadata = { title: "Colorful Magnetic Pipeline Building Block Set 42 Pcs\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
