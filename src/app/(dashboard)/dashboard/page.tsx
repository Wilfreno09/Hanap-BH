"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PlaceDetail } from "@/lib/types/PlacesInfo";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { useDispatch } from "react-redux";
import { setLocation } from "@/lib/redux/slices/location-slice";

export default function page() {
  const [details, setDetails] = useState<PlaceDetail[]>([]);
  const [coordinate, setCoordinate] = useState({});
  const dispatch = useDispatch<AppDispatch>();
  async function getNearbyPlace() {
    try {
      const response = await fetch("/api/map/nearby-places");

      const {
        data: { results },
      } = await response.json();

      setDetails(results);
    } catch (err) {
      throw err;
    }
  }

  function getLocation() {
    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        
        console.log(position.coords.latitude);
      },
      (error) => {
        throw error;
      }
    );
  }
  useEffect(() => {
    getLocation();
    getNearbyPlace();
  }, []);

  return (
    <div className={styles.homepage}>
      {details?.map((place, index) => (
        <h3 key={index}>{place.place_id}</h3>
      ))}
    </div>
  );
}
