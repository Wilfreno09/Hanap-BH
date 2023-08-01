"use client";
import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import SearchFilter from "@/components/layout/searchFilter/searchFilter";
import GlobalStateProvider from "./GlobalStateProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={styles.section}>
        <GlobalStateProvider>
          <Header />
          <Navigation />
          <SearchFilter />
          {children}
        </GlobalStateProvider>
      </section>
    </>
  );
}
