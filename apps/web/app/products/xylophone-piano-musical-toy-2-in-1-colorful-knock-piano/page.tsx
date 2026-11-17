import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsXylophonePianoMusicalToy2In1ColorfulKnockPianoPage";
export const metadata: Metadata = { title: "Xylophone Piano Musical Toy | 2 in 1 Knock Piano for Kids\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
