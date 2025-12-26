import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Secret token to protect the revalidation endpoint
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN || "your-secret-token";

export async function POST(request: NextRequest) {
  try {
    // Verify the secret token
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${REVALIDATE_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { type, slug, locale } = body;

    if (!type) {
      return NextResponse.json(
        { error: "Missing type parameter" },
        { status: 400 }
      );
    }

    // Revalidate based on content type
    switch (type) {
      case "product":
        if (slug && locale) {
          revalidatePath(`/${locale}/product/${slug}`);
        }
        // Revalidate home page as it shows products
        revalidatePath(`/${locale}`);
        break;

      case "case-study":
      case "finished-work":
        if (slug && locale) {
          revalidatePath(`/${locale}/finished-works/${slug}`);
        }
        // Revalidate finished works list
        revalidatePath(`/${locale}/finished-works`);
        // Revalidate home page as it shows featured case studies
        revalidatePath(`/${locale}`);
        break;

      case "brand":
        if (slug && locale) {
          revalidatePath(`/${locale}/brand/${slug}`);
        }
        break;

      case "home":
        if (locale) {
          revalidatePath(`/${locale}`);
        } else {
          // Revalidate all locales
          revalidatePath("/ro");
          revalidatePath("/it");
          revalidatePath("/en");
          revalidatePath("/ru");
        }
        break;

      case "all":
        // Revalidate entire site (use with caution)
        revalidatePath("/", "layout");
        break;

      default:
        return NextResponse.json(
          { error: "Invalid type parameter" },
          { status: 400 }
        );
    }

    return NextResponse.json({
      revalidated: true,
      type,
      slug,
      locale,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
