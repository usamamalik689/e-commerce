import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsILoveYouPenguinStuffedPlushToyPage";
export const metadata: Metadata = { title: "Customized Penguin Stuffed Plush Toy – I Love You\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
