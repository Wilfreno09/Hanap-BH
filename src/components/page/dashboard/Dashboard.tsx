"use client";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import PlaceDetail from "./PlaceDetail";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { useAppSelector } from "@/lib/redux/store";

export default function Dashboard() {
  const [places, setPlaces] = useState<PlaceDetailType[]>([]);
  const userLocation = useAppSelector(
    (state) => state.userLocationReducer.coordinates
  );

  async function getNearbyPlaces() {
    try {
      const response = await fetch("/api/map/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLocation),
      });
      const { data } = await response.json();
      setPlaces(data);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getNearbyPlaces();
  }, []);

  return (
    <div className={styles.dashboard}>
      {places?.map((place) => (
        <div key={place.place_id} className={styles.place__detail}>
          
        </div>
      ))}
    </div>
  );
}
