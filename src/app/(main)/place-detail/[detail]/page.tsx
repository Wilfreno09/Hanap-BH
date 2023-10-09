"use client";
import { useAppSelector } from "@/lib/redux/store";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { useEffect, useState } from "react";

export default function page({ params }: { params: { detail: string } }) {
  const [place_detail, setPlaceDetail] = useState<PlaceDetailType[]>();

  const place_name = params.detail.replace(/-/g, " ");
  const nearby_place_details = useAppSelector(
    (state) => state.nearby_places_details
  );

  async function getPlaceDetail() {
    const place = nearby_place_details.filter(
      (place) => place.name == place_name
    );
    if (place.length <= 0) {
      
    }
    setPlaceDetail(place);
  }

  useEffect(() => {
    getPlaceDetail();
  }, [nearby_place_details]);
  return (
    <div>
      <h1>{JSON.stringify(place_detail)}</h1>
    </div>
  );
}
