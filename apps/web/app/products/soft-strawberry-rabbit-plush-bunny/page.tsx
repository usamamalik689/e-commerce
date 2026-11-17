import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsSoftStrawberryRabbitPlushBunnyPage";
export const metadata: Metadata = { title: "Strawberry Rabbit Plush Bunny – Soft Stuffed Toy for Kids | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
