import React from "react";
import "./globals.css";
import { Manrope } from "next/font/google";
import ReduxProvider from "@/lib/redux/ReduxProvider";
import SessionProvider from "@/components/page/auth/SessionProvider";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
const poppins = Manrope({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Hanap BH",
  description:
    "A website utilizing google maps api to locate your nearby boadring houses",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.className}>
          <SessionProvider session={session}>
            {children} <Analytics />
          </SessionProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
