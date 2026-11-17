import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCutePandaPlushToyPage";
export const metadata: Metadata = { title: "Cute Panda Plush Toy | Soft Stuffed Panda in Red Shirt | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
