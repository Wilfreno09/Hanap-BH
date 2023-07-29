import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import SearchFilter from "@/components/layout/searchFilter/searchFilter";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={styles.section}>
        <Header />
        <Navigation />
        <SearchFilter />
        {children}
      </section>
    </>
  );
}
