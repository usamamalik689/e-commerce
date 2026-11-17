import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsBlueHoodieTeddyBearCuteStuffedTeddyWithCapPage";
export const metadata: Metadata = { title: "Blue Hoodie Teddy Bear – Cute Stuffed Teddy | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
