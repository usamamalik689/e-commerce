import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsCutePlushRabbitSoftToyWithHeartPinPage";
export const metadata: Metadata = { title: "Plush Rabbit Soft Toy with Heart Pin | Cute Bunny Gift | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
