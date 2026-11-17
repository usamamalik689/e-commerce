import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsGirlsMakeupAndBeautyGiftSetKidsMakeupHandbagKitPage";
export const metadata: Metadata = { title: "Girls Makeup and Beauty Gift Set | Kids Makeup Handbag\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
