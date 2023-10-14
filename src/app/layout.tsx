import React from "react";
import "./globals.css";
import { Manrope } from "next/font/google";
import ReduxProvider from "@/lib/redux/ReduxProvider";

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
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.className}>
          {auth}
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
