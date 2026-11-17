import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsWhatToGiftMyBestFriendPage";
export const metadata: Metadata = { title: "What to Gift My Best Friend? Personal Ideas\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
