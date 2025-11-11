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
  return "ro";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathLocale) {
    const res = NextResponse.next();
    if (request.cookies.get("locale")?.value !== pathLocale) {
      res.cookies.set("locale", pathLocale, { path: "/" });
    }
    return res;
  }

  const cookieLocale = request.cookies.get("locale")?.value;
  const locale = locales.includes(cookieLocale || "")
    ? (cookieLocale as string)
    : getLocaleFromHeader(request);

  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
