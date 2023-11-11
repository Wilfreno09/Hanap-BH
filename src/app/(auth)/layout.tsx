import Navigation from "@/components/layout/mobile/Navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
