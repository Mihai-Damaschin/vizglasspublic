import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import '@ant-design/v5-patch-for-react-19';

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ViZ GLASS",
  description: "Ferestre / Uși / Porți Secționate / Rolete"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
