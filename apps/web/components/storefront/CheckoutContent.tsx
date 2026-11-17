import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";

export default function CheckoutContent() { return <>
<main className={"store-state-page"}>
<h1>{"Checkout"}</h1>
<p>{"A few details, and you’re one step closer to a cuddle."}</p>
<div id={"store-checkout-root"}>
</div>
</main>
</>; }
