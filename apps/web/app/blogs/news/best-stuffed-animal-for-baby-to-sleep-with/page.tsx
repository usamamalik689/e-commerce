import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsBestStuffedAnimalForBabyToSleepWithPage";
export const metadata: Metadata = { title: "Best Stuffed Animal for Baby to Sleep With l Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
