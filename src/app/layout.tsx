import React from "react";
import "./globals.css";
import { Manrope } from "next/font/google";
import ReduxProvider from "../lib/redux/ReduxProvider";
import Script from "next/script";

const poppins = Manrope({
  subsets: ["latin"],
  weight: ["300", "400"],
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
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
