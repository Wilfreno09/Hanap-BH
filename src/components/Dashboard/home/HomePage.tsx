import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Content from "./Content";

async function getNearbyPlace() {
  const result = await fetch("/api/map/nearby-places");

  const details = await result.json();

  return details
}

export default function HomePage() {
  const placesDetails = getNearbyPlace();
  
  return (
    <div className={styles.homepage}>

      {placesDetails.map((place, index) => (
        <h3 key={index}>{place.place_id}</h3>
))}
    </div>
  );
}
