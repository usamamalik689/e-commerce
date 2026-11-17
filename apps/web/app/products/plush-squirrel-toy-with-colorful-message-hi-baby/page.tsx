import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPlushSquirrelToyWithColorfulMessageHiBabyPage";
export const metadata: Metadata = { title: "Hi Baby Squirrel Plush Toy – Toys Hutch Pakistan" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
