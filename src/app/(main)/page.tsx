"use client";
import BestOfferLoadingSkeleton from "@/components/page/main/BestOfferLoadingSkeleton";
import NearbyLoadingSkeleton from "@/components/page/main/NearbyLoadingSkeleton";
import { useAppSelector } from "@/lib/redux/store";
import dynamic from "next/dynamic";

interface InitialState {
  lat?: number;
  lng?: number;
}
const NearbySection = dynamic(
  () => import("@/components/page/main/NearbySection"),
  {
    loading: () => <NearbyLoadingSkeleton />,
  }
);
const BestOfferSection = dynamic(
  () => import("@/components/page/main/BestOfferSection"),
  {
    loading: () => <BestOfferLoadingSkeleton />,
  }
);
export default function page() {
  const user_location = useAppSelector(
    (state) => state.user_location_reducer.coordinates
  );
  console.log(user_location);
  return (
    <main>
      <NearbySection
        user_location={{ lat: user_location.lat!, lng: user_location.lng! }}
      />
      <BestOfferSection
        user_location={{ lat: user_location.lat!, lng: user_location.lng! }}
      />
    </main>
  );
}
