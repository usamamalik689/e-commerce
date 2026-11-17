import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsDoodleMatWaterCanvasPage";
export const metadata: Metadata = { title: "Doodle Mat Water Canvas | Magic Water Doodle Mat\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
