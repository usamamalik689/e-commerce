import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsPlushMonkeyCuteStripedTeeStuffedAnimalPage";
export const metadata: Metadata = { title: "Plush Monkey | Cute Striped Tee Stuffed Animal for Kids | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
