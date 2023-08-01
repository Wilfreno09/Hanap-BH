"use client";
import styles from "./MapPage.module.css";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import LoadingBar from "@/components/loading/LoadingBar";
import MapLayout from "./MapLayout";
import { useAppSelector } from "@/lib/redux/store";

export default function MapPage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const mapIsLoaded = useAppSelector((state) => state.mapLoaderStateReducer.mapLaodState)

  return (
    <section className={styles.map__container}>
      {mapIsLoaded ? (
        <MapLayout  user_lat={lat!}  user_lng={lng!}/>
      ) : (
        <LoadingBar />
      )}
    </section>
  );
}
