import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWoodenWhiteAndBlackDrawingBoardWithAbacusPage";
export const metadata: Metadata = { title: "Drawing Board with Abacus | Wooden Magnetic Board\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
