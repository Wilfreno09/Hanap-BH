"use client";
import BestOfferLoadingSkeleton from "@/components/page/main/BestOfferLoadingSkeleton";
import NearbyLoadingSkeleton from "@/components/page/main/NearbyLoadingSkeleton";
import { useAppSelector } from "@/lib/redux/store";
import dynamic from "next/dynamic";

const NearbySection = dynamic(
  () => import("@/components/page/main/NearbySection")
);
const BestOfferSection = dynamic(
  () => import("@/components/page/main/BestOfferSection")
);
export default function page() {
  const nearby_places = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  return (
    <main className="dark:text-white space-y-10 mb-20">
      <section className="flex flex-col mx-auto my-5 space-y-5">
        <h1 className="text-2xl font-semibold my-3 mx-3">Closest to you</h1>
        {nearby_places[0].place_id !== "" ? (
          <NearbySection data={nearby_places} />
        ) : (
          <NearbyLoadingSkeleton />
        )}
      </section>
      <section className="flex flex-col space-y-10 ">
        <h1 className="text-2xl font-semibold mx-3">Best Offers Nearby</h1>
        {nearby_places[0].place_id !== "" ? (
          <BestOfferSection data={nearby_places} />
        ) : (
          <BestOfferLoadingSkeleton />
        )}
      </section>
    </main>
  );
}
