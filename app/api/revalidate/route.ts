import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Dynamic Revalidation API Route
 *
 * This endpoint supports on-demand revalidation for dynamic paths like:
 * - [locale]/product/[slug]
 * - [locale]/brand/[slug]
 * - [locale]/finished-works/[slug]
 *
 * Usage:
 * POST /api/revalidate
 * Body: {
 *   "secret": "your-secret-token",
 *   "path": "/en/product/my-product-slug",
 *   "type": "product" // optional: product, brand, finished-works
 * }
 *
 * Or for multiple locales at once:
 * Body: {
 *   "secret": "your-secret-token",
 *   "type": "product",
 *   "slug": "my-product-slug",
 *   "locale": "en" // or ["en", "ro", "it", "ru"] for multiple
 * }
 */

const VALID_LOCALES = ["ro", "it", "en", "ru"] as const;
const VALID_TYPES = ["product", "brand", "finished-works"] as const;

type ValidLocale = (typeof VALID_LOCALES)[number];
type ValidType = (typeof VALID_TYPES)[number];

interface RevalidateRequestBody {
  secret?: string;
  path?: string;
  type?: ValidType;
  slug?: string;
  locale?: ValidLocale | ValidLocale[];
}

export async function POST(request: NextRequest) {
  try {
    const body: RevalidateRequestBody = await request.json();

    // Verify secret token
    const secret = body.secret || request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret token" },
        { status: 401 }
      );
    }

    // Option 1: Direct path revalidation
    if (body.path) {
      revalidatePath(body.path);
      return NextResponse.json({
        revalidated: true,
        paths: [body.path],
        message: `Revalidated path: ${body.path}`,
      });
    }

    // Option 2: Dynamic path construction
    if (body.type && body.slug) {
      const paths: string[] = [];

      // Determine which locales to revalidate
      const locales = body.locale
        ? Array.isArray(body.locale)
          ? body.locale
          : [body.locale]
        : VALID_LOCALES;

      // Validate locales
      const invalidLocales = locales.filter(
        (locale) => !VALID_LOCALES.includes(locale as ValidLocale)
      );
      if (invalidLocales.length > 0) {
        return NextResponse.json(
          {
            message: `Invalid locale(s): ${invalidLocales.join(", ")}. Valid locales are: ${VALID_LOCALES.join(", ")}`,
          },
          { status: 400 }
        );
      }

      // Validate type
      if (!VALID_TYPES.includes(body.type)) {
        return NextResponse.json(
          {
            message: `Invalid type: ${body.type}. Valid types are: ${VALID_TYPES.join(", ")}`,
          },
          { status: 400 }
        );
      }

      // Construct and revalidate paths for each locale
      for (const locale of locales) {
        const path = `/${locale}/${body.type}/${body.slug}`;
        revalidatePath(path);
        paths.push(path);
      }

      return NextResponse.json({
        revalidated: true,
        paths,
        message: `Revalidated ${paths.length} path(s)`,
      });
    }

    // Invalid request
    return NextResponse.json(
      {
        message:
          'Invalid request. Provide either "path" or both "type" and "slug"',
        examples: {
          directPath: {
            secret: "your-secret-token",
            path: "/en/product/my-product-slug",
          },
          dynamicPath: {
            secret: "your-secret-token",
            type: "product",
            slug: "my-product-slug",
            locale: "en", // or ["en", "ro"] for multiple
          },
        },
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
