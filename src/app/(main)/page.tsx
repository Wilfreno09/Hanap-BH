"use client";
import BestOfferSection from "@/components/page/main/BestOfferSection";
import NearbySection from "@/components/page/main/NearbySection";
import { useAppSelector } from "@/lib/redux/store";

export default function page() {
  const nearby_places = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  const next_page_token = useAppSelector(
    (state) => state.next_page_token_reducer.next_page_token
  );
  return (
    <main>
      <NearbySection nearby_places={nearby_places} />
      <BestOfferSection
        nearby_places={nearby_places}
        next_page_token={next_page_token!}
      />
    </main>
  );
}