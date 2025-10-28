import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "@/lib/constants";

function getLocaleFromHeader(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const acceptedLanguages = acceptLanguage
    .split(",")
    .map((lang: string) => lang.split(";")[0].trim());

  for (const lang of acceptedLanguages) {
    if (locales.includes(lang)) return lang;
    const matched = locales.find((loc) => loc.startsWith(lang));
    if (matched) return matched;
  }

  return "us";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  const locale = getLocaleFromHeader(request);

  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
