import type { Metadata } from "next";
import Page0 from "@/components/storefront/BlogsNewsPage";
import Page1 from "@/components/storefront/BlogsNewsPage2Page";
import Page2 from "@/components/storefront/BlogsNewsPage1Page";
import Page3 from "@/components/storefront/BlogsNewsPage3Page";
export const metadata: Metadata = { title: "News\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["page"] === "2") return <Page1 />;
if (query["page"] === "1") return <Page2 />;
if (query["page"] === "3") return <Page3 />;
return <Page0 />;
}
