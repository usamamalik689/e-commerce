import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsRedTeddyBeadWithBowPage";
export const metadata: Metadata = { title: "Red Teddy Bear with Bow – Soft Plush Toy | Buy in Pakistan\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
