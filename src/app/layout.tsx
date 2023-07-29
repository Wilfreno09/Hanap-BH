import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "./(dashboard)/ReduxProvider";

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
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>

        {children} 
        </ReduxProvider>
      </body>
    </html>
  );
}
