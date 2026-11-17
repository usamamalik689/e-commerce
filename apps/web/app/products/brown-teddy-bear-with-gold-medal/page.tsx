import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsBrownTeddyBearWithGoldMedalPage";
export const metadata: Metadata = { title: "Brown Teddy Bear with Gold Medal | Toys Hutch Pakistan" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
