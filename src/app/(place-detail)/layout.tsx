import RouterSateSaver from "@/components/RouterSateSaver";
import Header from "@/components/layout/header/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouterSateSaver>
        <Header />
        {children}
      </RouterSateSaver>
    </>
  );
}
