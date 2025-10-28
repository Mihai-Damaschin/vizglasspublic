import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/app/providers";

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
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
