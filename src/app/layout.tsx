/** @format */

import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Footer } from "@/modules/Footer/Footer";
import { TopAppBar } from "@/modules/TopAppBar/Header";

// const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Portal",
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <TopAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
