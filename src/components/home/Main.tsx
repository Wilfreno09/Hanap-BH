"use client"

import NewsFeed from "@/components/home/newsfeed/NewsFeed";
import { useEffect, useState } from "react";
export default function Main() {

  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <NewsFeed lat={location!.coords.latitude} lng={location!.coords.longitude}/>

  )
}
