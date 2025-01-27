import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESG Reporting Software for CSRD Reporting - IMPAKTER PRO",
  description:
    "An ESG Software for CSRD reporting, sustainability reporting, ESG Score & more. Our ESG Tool makes reporting ESG fast, cheap, & simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
