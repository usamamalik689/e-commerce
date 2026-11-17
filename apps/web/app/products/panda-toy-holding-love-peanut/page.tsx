import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPandaToyHoldingLovePeanutPage";
export const metadata: Metadata = { title: "Cute Panda Stuff Toy Holding Love Peanut – Soft Plush Gift\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
