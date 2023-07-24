"use client"
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Content from "./Content";

export default async function HomePage() {

  const [places, setPlaces] = useState([]);

  async function getNearbyPlace() {
    const result = await fetch("/api/map/nearby-places");

    const details = await result.json();
    setPlaces(details);
  }


  useEffect(() => {
    getNearbyPlace();
  }, []);

  return (
    <div className={styles.homepage}>

      {places.map((place) => (
          <Content />
        ))}
    </div>
  );
}
