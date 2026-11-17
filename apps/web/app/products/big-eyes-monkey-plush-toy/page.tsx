import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsBigEyesMonkeyPlushToyPage";
export const metadata: Metadata = { title: "Big Eyes Monkey Plush – Soft Stuff Toy for Kids & Babies\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
