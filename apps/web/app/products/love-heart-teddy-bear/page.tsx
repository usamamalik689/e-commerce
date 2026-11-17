import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsLoveHeartTeddyBearPage";
export const metadata: Metadata = { title: "Soft Fluffy Sequin Love Heart Teddy Bear | Hat Style\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
