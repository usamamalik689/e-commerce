import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsAdorableStuffedPenguinWithFishInHandPage";
export const metadata: Metadata = { title: "Stuffed Penguin Plush Toy with Fish | Soft Kawaii Penguin | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
