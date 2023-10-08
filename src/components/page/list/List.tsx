"use client";
import { useEffect, useState } from "react";
import styles from "./List.module.css";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { useAppSelector } from "@/lib/redux/store";
import Card from "./Card";

export default function List() {
  const [places, setPlaces] = useState<PlaceDetailType[]>([]);
  const current_location = useAppSelector(
    (state) => state.user_location_reducer.coordinates
  );

  async function getNearbyPlaces() {
    try {
      const response = await fetch("/api/map/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(current_location),
      });
      const { data } = await response.json();
      setPlaces(data);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    if (current_location.lat !== undefined) {
      getNearbyPlaces();
    }
  }, [current_location]);

  return (
    <div className={styles.list}>
      {places?.map((place) => (
        <div className={styles.card__list}>
          <Card place={place} key={place.place_id} />
        </div>
      ))}
    </div>
  );
}
