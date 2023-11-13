"use clietn";
import BestOfferLoadingSkeleton from "@/components/page/main/BestOfferLoadingSkeleton";
import MainLoadingSkeleton from "@/components/page/main/NearbyLoadingSkeleton";

export default function loading() {
  return (
    <section className="flex flex-col">
      <MainLoadingSkeleton />
      <BestOfferLoadingSkeleton />
    </section>
  );
}
