import type { Metadata } from "next";
import Page0 from "@/components/storefront/CollectionsNewArrivalsPage";
import Page1 from "@/components/storefront/CollectionsNewArrivalsViewNewArrivalsPage";
import Page2 from "@/components/storefront/CollectionsNewArrivalsPage2Page";
import Page3 from "@/components/storefront/CollectionsNewArrivalsViewNewArrivalsPage2Page";
import Page4 from "@/components/storefront/CollectionsNewArrivalsPage1Page";
import Page5 from "@/components/storefront/CollectionsNewArrivalsViewNewArrivalsPage1Page";
export const metadata: Metadata = { title: "New Arrivals – Shop the Latest Toys | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
if (query["view"] === "new-arrivals" && query["page"] === "2") return <Page3 />;
if (query["view"] === "new-arrivals" && query["page"] === "1") return <Page5 />;
if (query["view"] === "new-arrivals") return <Page1 />;
if (query["page"] === "2") return <Page2 />;
if (query["page"] === "1") return <Page4 />;
return <Page0 />;
}
