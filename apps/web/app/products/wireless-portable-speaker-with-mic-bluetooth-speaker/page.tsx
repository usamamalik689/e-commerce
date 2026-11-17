import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWirelessPortableSpeakerWithMicBluetoothSpeakerPage";
export const metadata: Metadata = { title: "Wireless Portable Speaker with Mic | Bluetooth Speaker\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
