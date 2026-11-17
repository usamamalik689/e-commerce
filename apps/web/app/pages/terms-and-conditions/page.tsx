import type { Metadata } from "next";
import Page0 from "@/components/storefront/PagesTermsAndConditionsPage";
export const metadata: Metadata = { title: "Terms and Conditions\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
