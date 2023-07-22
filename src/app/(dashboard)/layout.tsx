import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  );
}