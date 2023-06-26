"use client"

import styles from "./HomePage.module.css"
import { useEffect, useState } from "react";
import NewsFeed from "./newsfeed/NewsFeed";


export default function HomePage() {
    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [lat, setLat] = useState<number>();
    const [lng, setLng] = useState<number>();
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);    
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);

          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }, []);
  
  return (
    <div className={styles.homepage}>
      <NewsFeed lat={lat} lng={lng}/>
    </div>
  )
}
