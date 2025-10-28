import { ReactNode } from "react";
import type { Metadata } from "next";

import "@ant-design/v5-patch-for-react-19";

import "./globals.css";

export const metadata: Metadata = {
  title: "ViZ GLASS",
  description: "Ferestre / Uși / Porți Secționate / Rolete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
