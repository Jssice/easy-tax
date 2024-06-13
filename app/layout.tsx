import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EasyTax - Simple Tax Calculation",
  description:
    "EasyTax helps you calculate your tax effortlessly and provides your income ranking. A simple and effective tax calculator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen bg-background"
        suppressHydrationWarning={true}
      >
        <Header />
        <div className="container flex-1 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
