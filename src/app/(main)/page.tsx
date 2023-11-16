"use client";
import BestOfferLoadingSkeleton from "@/components/page/main/BestOfferLoadingSkeleton";
import NearbyLoadingSkeleton from "@/components/page/main/NearbyLoadingSkeleton";
import { useAppSelector } from "@/lib/redux/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const NearbySectionMain = dynamic(
  () => import("@/components/page/main/NearbySection")
);
const NearbySectionMobile = dynamic(
  () => import("@/components/page/main/mobile/NearbySection")
);
const BestOfferSectionMain = dynamic(
  () => import("@/components/page/main/BestOfferSection")
);
export default function page() {
  const [page_width, setPageWidth] = useState(0);
  const nearby_places = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  useEffect(() => {
    function resizeHandler() {
      setPageWidth(window.innerWidth);
    }
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  return (
    <main className="dark:text-white mb-20 mt-[10vh] space-y-5 md:mb-0">
      <section className="flex flex-col space-y-5 py-5 lg:h-[85vh]">
        <h1 className="text-3xl font-bold my-5 mx-8 md:text-5xl">
          Closest to you
        </h1>
        {nearby_places[0].place_id !== "" ? (
          page_width >= 640 ? (
            <NearbySectionMain data={nearby_places} />
          ) : (
            <NearbySectionMobile data={nearby_places} />
          )
        ) : (
          <NearbyLoadingSkeleton />
        )}
      </section>
      <section className="flex flex-col space-y-10 bg-red-400 mt-10">
        <h1 className="text-2xl font-semibold mx-3 md:text-4xl">
          Best Offers Nearby
        </h1>
        {nearby_places[0].place_id !== "" ? (
          <BestOfferSectionMain data={nearby_places} />
        ) : (
          <BestOfferLoadingSkeleton />
        )}
      </section>
    </main>
  );
}
