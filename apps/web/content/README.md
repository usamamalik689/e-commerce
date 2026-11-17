# Reference archive

These JSON files are historical captures used to compare the original Toys Hutch website. The application does not import them or render HTML from them.

The storefront now uses explicit Next.js routes in `app/`, React page components in `components/storefront/`, a shared `product-card.tsx`, and typed catalog modules. Each product, collection, article and information route has a `page.tsx` entry. Query layouts remain supported by their collection or blog route.

`components/storefront/product-results.tsx` renders listings with React state. Filtering, sorting, search and Load More use browser history or Next navigation without a full document reload. Cart and wishlist use browser-local storage. Backend ordering, payments and message delivery are intentionally deferred.

Images, fonts, videos and reference styles remain local in `public/toyshutch/`. Do not run the legacy HTML import/finalize scripts against the React application; these are archive tools.

Run the UI with `npm run dev:web`. Build with `npm run build -w @ecommerce/web`. Check listing behavior with `node --test scripts/product-listing.test.mjs`.
