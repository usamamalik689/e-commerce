import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsYellowDuckPlushToyWithGoldPendantPage";
export const metadata: Metadata = { title: "Yellow Duck Plush Toy with Gold Pendant | Toys Hutch PK" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
