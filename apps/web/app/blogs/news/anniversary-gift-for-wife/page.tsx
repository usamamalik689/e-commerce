import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsAnniversaryGiftForWifePage";
export const metadata: Metadata = { title: "Best Anniversary Gift for a Wife l Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
