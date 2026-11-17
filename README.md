# E-commerce monorepo

- `apps/web` runs Next.js 16 App Router with TypeScript.
- `apps/api` runs NestJS with TypeScript. It provides a Prisma client for PostgreSQL, a Redis cache service, BullMQ connection configuration, and a Cloudinary client for media.

## Local development

With Node.js 24, npm, and Docker Compose available, run from the repo root in PowerShell:

```powershell
npm install
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/web/.env.example apps/web/.env.local
docker compose up -d --wait
npm run dev
```

Existing PostgreSQL and Redis instances also work. Set `DATABASE_URL` and `REDIS_URL` in `apps/api/.env` to use them. Set `CLOUDINARY_URL` in that same file when cloud media is needed.

Open [the storefront starter](http://localhost:3000) or [the API health route](http://localhost:3001/api/health). The storefront also proxies `/api/*` to NestJS. The health route checks the HTTP process.

Browse and try the available endpoints in [Swagger UI](http://localhost:3001/api/docs). The generated OpenAPI schema is available at [ `/api/docs-json`](http://localhost:3001/api/docs-json).

`npm run build`, `npm run typecheck`, `npm run lint`, and `npm run db:validate` verify the starter. Prisma generates its client before API development and builds. After adding the first data models, run `npm run db:migrate -- --name init` to create the first migration.
