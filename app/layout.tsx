import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tijaratk - تجارتك",
    description:
      "Automatically tag, analyze, and understand your Facebook page interactions using advanced AI",
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: string };
  children: ReactNode;
}>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} data-theme="light" translate="no">
      <body className={`${inter.className} bg-base-200`}>{children}</body>
    </html>
  );
}
