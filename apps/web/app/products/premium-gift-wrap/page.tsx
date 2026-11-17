import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPremiumGiftWrapPage";
export const metadata: Metadata = { title: "Chocolate\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
