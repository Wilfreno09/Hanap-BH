"use client";

import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Content from "./Content";

export default async function HomePage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [places, setPlaces] = useState([]);

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
  async function getNearbyPlace() {
    const result = await fetch("/api/map/nearby-places");

    const details = await result.json();
    setPlaces(details);
  }
  useEffect(() => {
    getLocation();
    getNearbyPlace();
  }, [lat, lng]);

  return (
    <div className={styles.homepage}>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      {/* {places.map((place) => (
          <Content />
        ))} */}
    </div>
  );
}
