"use client";
import Error503 from "@/components/page/error/Error408";
import Offline from "@/components/page/error/Offline";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import NearbySection from "@/components/page/main/nearby-places/NearbySection";
import BestOfferSection from "@/components/page/main/best-offer/BestOfferSection";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { setNearbyPlaceDetails } from "@/lib/redux/slices/nearby-place-detail-slice";

export default function page() {
  const place_details = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  const next_page_token = useAppSelector(
    (state) => state.next_page_token_reducer.next_page_token
  );
  useEffect(() => {}, [next_page_token, place_details]);
  return (
    <section className="dark:text-white text-gray-900 mb-20 mt-[10vh] space-y-5 md:mb-0 ">
      <NearbySection data={place_details!} />
      <BestOfferSection token={next_page_token!} data={place_details!} />
    </section>
  );
}
