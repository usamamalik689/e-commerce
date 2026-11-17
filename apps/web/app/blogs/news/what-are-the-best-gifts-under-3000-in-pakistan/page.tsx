import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsWhatAreTheBestGiftsUnder3000InPakistanPage";
export const metadata: Metadata = { title: "Best Gifts Under 3000 in Pakistan | Toys hutch\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
