import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsWhyGenZLovesStuffedAnimalsPage";
export const metadata: Metadata = { title: "Why Does Gen Z Love Stuffed Animals So Much Meta\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
