import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPinkTeddyBearWithHoodiePage";
export const metadata: Metadata = { title: "Pink Hoodie Teddy Bear – Cute Soft Stuffed Toy | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
