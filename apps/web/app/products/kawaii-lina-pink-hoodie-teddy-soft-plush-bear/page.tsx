import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsKawaiiLinaPinkHoodieTeddySoftPlushBearPage";
export const metadata: Metadata = { title: "Kawaii Lina Pink Hoodie Teddy – Pink Cat Bear | ToysHutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
