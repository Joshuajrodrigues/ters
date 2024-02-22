import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderContent } from "./components/headerContent";
import Footer from "./components/footerNav";
import FullDivide from "./components/fullDivide";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ters",
  description: "Konkani rosary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + " " + " bg-slate-800 text-orange-600 mx-5"}
      >
        <HeaderContent/>
        {children}{" "}
        <FullDivide/>
        <Footer/>
      </body>
    </html>
  );
}
