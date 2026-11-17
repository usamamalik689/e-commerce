import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsWhatToGiftAGirlOnHerBirthdayPage";
export const metadata: Metadata = { title: "What to Gift a Girl on Her Birthday? l Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
