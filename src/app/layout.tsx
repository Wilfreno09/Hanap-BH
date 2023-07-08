import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import HomeMapSelection from "@/components/layout/hmSelection/HomeMapSelection";
import Menu from "@/components/layout/Menu";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
});

export const metadata = {
  title: "Hanap BH",
  description:
    "A website utilizing google maps api to locate your nearby boadring houses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <HomeMapSelection />
        <Menu />
        {children}
      </body>
    </html>
  );
}
