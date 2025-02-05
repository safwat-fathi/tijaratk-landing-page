

import { Footer } from "@/lib/components/Footer";

import { ReactNode } from "react";

export default function HomeLayout({
  params,
  children,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
<>
			{children}
			<Footer />

</>
	);
}
