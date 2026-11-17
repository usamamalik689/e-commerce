import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsGiftIdeasUnder5000InPakistanPage";
export const metadata: Metadata = { title: "Gift Ideas Under 5000 in Pakistan | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
