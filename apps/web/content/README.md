# Storefront reference content

The local storefront includes 175 captured page views from Toys Hutch: all public linked products, collections, collection layouts and pagination, blog articles, information pages, and policy pages. Wishlist and cart use local browser storage. Checkout is a branded frontend preview.

Page markup and page-specific CSS preserve the reference's layouts and responsive breakpoints. Images, fonts, gallery videos and stylesheets live in `public/toyshutch`; no Shopify runtime or tracking scripts are executed. `app/home-interactions.tsx` implements the local interactions, and `lib/store-pages.ts` handles route lookup, collection filtering, sorting and search.

Run from the repository root:

```sh
npm run dev:web
npm run build -w @ecommerce/web
```

To refresh the reference content, run `node scripts/import-website.mjs` followed by `node scripts/finalize-website.mjs`. The importer caches reference responses in `.reference-cache`, reuses local assets, and resumes from `content/routes.json`.

After starting a production server, verify all routes and imported assets with `node scripts/verify-website.mjs http://localhost:3010`.

Orders, payments, newsletter subscriptions and contact-message delivery require service integrations. The preview does not submit these to the original store. Inventory and prices are captured reference data, not a live Shopify connection.
