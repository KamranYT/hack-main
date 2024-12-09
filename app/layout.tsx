import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import  NavBar  from "@/components/Navbar";
import MobileNav from "@/components/MobileBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hekto Furniture",
  description: "Discover the best furniture in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <MobileNav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
