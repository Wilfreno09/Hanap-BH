"use client";

import { PlaceDetail } from "@/lib/types/PlacesDetails";
import { useEffect, useState } from "react";

export default function test() {
  const [details, setDetails] = useState<PlaceDetail[]>([]);

  useEffect(() => {
    async function getPlaceDetails() {
      try {
        const port = process.env.NEXT_PUBLIC_LOCALHOST_PORT;

        const response = await fetch(`api/map/nearby-places`);
        const {
          data: { results },
        } = await response.json();

        setDetails(results);
      } catch (err) {
        throw err;
      }
    }
    getPlaceDetails();
  }, []);

  return (
    <>
      {details?.map((detail) => (
        <p key={detail.place_id}>{detail.place_id}</p>
      ))}
    </>
  );
}
