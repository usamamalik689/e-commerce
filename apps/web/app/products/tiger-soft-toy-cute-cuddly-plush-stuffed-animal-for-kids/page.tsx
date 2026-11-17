import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsTigerSoftToyCuteCuddlyPlushStuffedAnimalForKidsPage";
export const metadata: Metadata = { title: "Tiger Soft Toy | Cute Cuddly Plush Stuffed Tiger for Kids | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
