import { ReactNode } from "react";

import { Footer } from "@/lib/components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
