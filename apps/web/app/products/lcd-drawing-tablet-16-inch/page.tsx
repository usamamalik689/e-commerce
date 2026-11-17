import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsLcdDrawingTablet16InchPage";
export const metadata: Metadata = { title: "LCD Drawing Tablet 16 Inch | Colorful Writing Tablet\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
