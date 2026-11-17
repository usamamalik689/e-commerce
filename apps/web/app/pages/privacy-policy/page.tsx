import type { Metadata } from "next";
import Page0 from "@/components/storefront/PagesPrivacyPolicyPage";
export const metadata: Metadata = { title: "Toys Hutch Privacy Policy – How We Protect Your Data" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
