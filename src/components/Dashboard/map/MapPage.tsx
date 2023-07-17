"use client";
import Geolocation from "@/lib/Geolocation";
import styles from "./MapPage.module.css";
import {useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import LoadingBar from "@/components/loading/LoadingBar";
import MapLayout from "./MapLayout";

export default function MapPage() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  useEffect(() => {
    const getData = async () => {
      try {
        const geolocation = await Geolocation();

        setLatitude(geolocation.lat);
        setLongitude(geolocation.lng);
      } catch (err) {
        throw err;
      }
    };

    getData();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  return (
    <section className={styles.map__container}>
      {isLoaded ? <MapLayout lat={latitude} lng={longitude} /> : <LoadingBar />}
    </section>
  );
}
