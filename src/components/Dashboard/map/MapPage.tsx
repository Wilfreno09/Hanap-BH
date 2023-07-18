"use client";
import styles from "./MapPage.module.css";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import LoadingBar from "@/components/loading/LoadingBar";
import MapLayout from "./MapLayout";

export default function MapPage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  async function getLocation() {
    try {
      const result = await fetch("/api/map/geolocation", { cache: "no-store" });

      const details = await result.json();

      setLat(details.lat);
      setLng(details.lng);
    } catch (err) {
      if (!navigator.geolocation) throw err;

      navigator.geolocation.getCurrentPosition(
        (location) => {
          setLat(location.coords.latitude);
          setLng(location.coords.longitude);
        },
        (err) => err
      );
    }
  }
  useEffect(() => {
    getLocation();
  }, [lat, lng]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  return (
    <section className={styles.map__container}>
      {isLoaded ? (
        <MapLayout  user_lat={lat!}  user_lng={lng!}/>
      ) : (
        <LoadingBar />
      )}
    </section>
  );
}
