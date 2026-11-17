import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsBabyPedalPianoFitnessMatWithMusicLightsAndHangingToysPage";
export const metadata: Metadata = { title: "Baby Pedal Piano Fitness Mat with Music, Lights and Hanging Toys\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
