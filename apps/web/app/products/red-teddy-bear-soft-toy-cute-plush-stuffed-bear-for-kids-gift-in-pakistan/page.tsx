import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsRedTeddyBearSoftToyCutePlushStuffedBearForKidsGiftInPakistanPage";
export const metadata: Metadata = { title: "Red Teddy Bear Plush Toy | Soft Stuffed Valentine Bear | Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
