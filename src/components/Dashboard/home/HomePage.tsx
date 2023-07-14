"use client";

import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Content from "./Display/Content";
import Geolocation from "@/lib/Geolocation";

export default async function HomePage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

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
  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
