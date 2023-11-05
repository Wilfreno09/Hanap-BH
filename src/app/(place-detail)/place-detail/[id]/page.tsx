"use client";
import Place from "@/components/page/place/Place";
import { useAppSelector } from "@/lib/redux/store";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { useEffect, useState } from "react";

export default function page({ params }: { params: { id: string } }) {
  const [place_detail, setPlaceDetail] = useState<PlaceDetailType>();

  const nearby_place_details = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  const user_location = useAppSelector(
    (state) => state.user_location_reducer.coordinates
  );
  async function getPlaceDetail() {
    const place = nearby_place_details.filter(
      (place) => place.place_id == params.id
    );
    if (place.length <= 0) {
      try {
        const response = await fetch(`/api/database/place-detail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ place_id: params.id, user_location }),
        });
        const { data } = await response .json();
        console.log("data: ", data);
        setPlaceDetail(data);
        return;
      } catch (err) {
        throw err;
      }
    }
    setPlaceDetail(place[0]);
  }

  useEffect(() => {
    getPlaceDetail();
  }, [nearby_place_details]);

  return (
    <>
      <Place place_detail={place_detail!} />
    </>
  );
}
