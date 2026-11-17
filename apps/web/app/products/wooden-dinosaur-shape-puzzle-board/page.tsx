import type { Metadata } from "next";
import Page0 from "@/components/storefront/ProductsWoodenDinosaurShapePuzzleBoardPage";
export const metadata: Metadata = { title: "Wooden Dinosaur Shape Puzzle | Dinosaur Puzzle Board\r – Toys Hutch" };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
const query = await searchParams;
return <Page0 />;
}
