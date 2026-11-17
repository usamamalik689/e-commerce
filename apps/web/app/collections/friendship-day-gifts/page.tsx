import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsFriendshipDayGiftsPage";
export const metadata: Metadata = { title: "Friendship Day Gifts\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
