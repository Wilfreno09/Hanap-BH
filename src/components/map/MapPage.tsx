"use client";
import styles from "@/components/map/MapPage.module.css";
import { Props } from "@/lib/types/Props";
import { stateProps } from "@/lib/types/stateProps";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export default function MapPage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  useEffect(() => {
    if (!navigator.geolocation) throw new Error("Geolocation is Not available");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.latitude);
      },
      (error) => {
        throw error;
      }
    );
  }, []);

  const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          zoom={14}
          center={{ lat: lat!, lng: lng! }}
          mapContainerClassName={styles.map__container}
        ></GoogleMap>
      )}
    </>
  );
}
