This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## On-Demand Revalidation

This project includes a dynamic revalidation API route that supports on-demand revalidation for localized content.

### Setup

1. Add the `REVALIDATION_SECRET` environment variable to your `.env.local` file:
   ```bash
   REVALIDATION_SECRET=your-secret-token-here
   ```

2. Use a strong, randomly generated secret for production environments.

### Usage

The revalidation endpoint supports two methods:

#### Method 1: Direct Path Revalidation

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "your-secret-token",
    "path": "/en/product/my-product-slug"
  }'
```

#### Method 2: Dynamic Path Construction

Revalidate a single locale:
```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "your-secret-token",
    "type": "product",
    "slug": "my-product-slug",
    "locale": "en"
  }'
```

Revalidate multiple locales at once:
```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "your-secret-token",
    "type": "product",
    "slug": "my-product-slug",
    "locale": ["en", "ro", "it", "ru"]
  }'
```

### Supported Types

- `product` - Revalidates `/[locale]/product/[slug]`
- `brand` - Revalidates `/[locale]/brand/[slug]`
- `finished-works` - Revalidates `/[locale]/finished-works/[slug]`

### Strapi Webhook Integration

To automatically revalidate content when it's updated in Strapi, configure a webhook:

1. In Strapi admin, go to Settings → Webhooks
2. Create a new webhook with:
   - URL: `https://your-domain.com/api/revalidate`
   - Events: `entry.create`, `entry.update`, `entry.delete`
3. Add the following to the webhook body:
   ```json
   {
     "secret": "your-secret-token",
     "type": "product",
     "slug": "{{ entry.slug }}",
     "locale": ["en", "ro", "it", "ru"]
   }
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
