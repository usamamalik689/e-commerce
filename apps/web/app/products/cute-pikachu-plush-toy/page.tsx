import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCutePikachuPlushToyPage";
export const metadata: Metadata = { title: "Cute Pikachu Plush Toy – Soft Pokémon Stuffed Toy for Kids\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
