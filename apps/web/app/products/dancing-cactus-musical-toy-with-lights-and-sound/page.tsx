import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsDancingCactusMusicalToyWithLightsAndSoundPage";
export const metadata: Metadata = { title: "Dancing Cactus Musical Toy with Lights and Sound\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
