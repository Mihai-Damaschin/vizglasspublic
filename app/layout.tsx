import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { locales } from "@/lib/constants";

import "@ant-design/v5-patch-for-react-19";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ViZ GLASS",
  description: "Ferestre / Uși / Porți Secționate / Rolete",
};
export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value ?? "";
  const locale = locales.includes(cookieLocale) ? cookieLocale : "ro";

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
