"use client";
import styles from "./HomeMapSelection.module.css";
import { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import MapNav from "./MapNav";
export default function HomeMapSelection() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [mapSelected, setMapSelected] = useState(false);
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const fontSize = 36;

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

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <HomeNav
          homeSelected={homeSelected}
          setHomeSelected={setHomeSelected}
          setMapSelected={setMapSelected}
          fontSize={fontSize}
          lat={lat}
          lng={lng}
        />
        <MapNav
          mapSelected={mapSelected}
          setMapSelected={setMapSelected}
          setHomeSelected={setHomeSelected}
          fontSize={fontSize}
          lat={lat}
          lng={lng}
        />
      </div>
    </div>
  );
}
