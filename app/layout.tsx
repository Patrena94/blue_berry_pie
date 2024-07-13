import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";

const marcellus = Marcellus({ weight: ["400"],
  subsets:['latin']
 });

export const metadata: Metadata = {
  title: "Real Estate Website",
  description: "Created by Vintage Vashti LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={marcellus.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        </body>
       
    </html>
  );
}
