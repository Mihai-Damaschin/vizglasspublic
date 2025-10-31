import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { TLocales } from "@/lib/constants";

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
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: TLocales }>;
}>) {
  const { locale } = await params;

  const dict = await getDictionary(locale); // en

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <Header dict={dict} />

        {children}

        <Footer />
      </body>
    </html>
  );
}
