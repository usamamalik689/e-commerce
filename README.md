# Toys Hutch e-commerce

Next.js frontend in `apps/web`; the NestJS backend scaffold remains in `apps/api`. The storefront currently uses local product data and browser-local cart/wishlist storage. Orders, payments and message delivery will be connected to the backend later.

## Frontend structure

```text
apps/web/
  app/                         Route entry points and the shared root layout
    products/[slug]/           One product route for every product
    collections/[slug]/        One filtered collection route
    blogs/news/[slug]/         One article route
    pages/[slug]/              Policy pages
  features/
    products/                  Product template, gallery and purchase controls
    collections/               Collection templates and filters
    catalog/                   Shared product card
    blog/                      Article listing, article template and cards
    home/sections/             Homepage sections
    cart/                      Shared store state, drawers and checkout UI
    search/                    Search page and suggestions
    information/               About, contact, FAQs and policy template
  components/
    layout/                    Header, category menu and footer
    shared/                    Newsletter, page hero and rich-text renderer
    ui/                        Existing reusable UI primitives
  data/                        Typed frontend fixtures; no HTML page snapshots
  types/                       Shared product, article, collection and cart models
  lib/                         Pure filtering and money helpers
  styles/                      Global styles, theme and storefront overrides
  public/toyshutch/            Local images, fonts, videos and stylesheets
```

Route files resolve a slug, select typed data, set metadata and render the appropriate feature template. Product layouts are shared; adding a product does not require creating a new page or component. Unknown slugs return 404. The root layout owns the header, footer and persistent cart provider.

Rich descriptions are semantic content nodes rendered with React. No page HTML is injected at runtime. Collection filtering, sorting, search and Load More use React state and browser history without full-page refreshes. Captured HTML/JSON, cache files and legacy import scripts have been removed.

## Run and verify

```sh
npm install
npm run dev:web
npm run build -w @ecommerce/web
node --test scripts/product-listing.test.mjs
```

To check all product/collection/article routes and local assets against a production server:

```sh
npm run start -w @ecommerce/web -- --port 3010
node scripts/verify-website.mjs http://localhost:3010
```

## Backend scaffold

Run `npm run dev:api` for NestJS. Configure `apps/api/.env` from its example when connecting PostgreSQL, Redis or Cloudinary. `compose.yaml` supplies local PostgreSQL and Redis services. API documentation is available at `http://localhost:3001/api/docs` when running.
