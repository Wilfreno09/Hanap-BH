"use client";

import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { setMapCenter } from "@/lib/redux/slices/map-center-slice";
import { useEffect } from "react";
import { setUserLocation } from "@/lib/redux/slices/user-location-slice";
import { setNearbyPlaceDetails } from "@/lib/redux/slices/nearby-place-detail-slice";
import RouterSateSaver from "@/components/RouterSateSaver";

export default function layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const current_location = useAppSelector(
    (state) => state.user_location_reducer.coordinates
  );
  async function getNearbyPlaces() {
    try {
      const response = await fetch("/api/map/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",   
        },
        body: JSON.stringify(current_location),
      });
      const { data } = await response.json();
      dispatch(setNearbyPlaceDetails(data));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (current_location.lat !== undefined) {
      getNearbyPlaces();
    }
  }, [current_location]);

  useEffect(() => {
    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(
          setMapCenter({ coordinates: { lat: latitude, lng: longitude } })
        );
      },
      (error) => {
        throw error;
      }
    );

    const watch_id = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(
          setUserLocation({
            coordinates: {
              lat: latitude,
              lng: longitude,
            },
          })
        );
      },
      (error) => {
        throw error;
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watch_id);
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <RouterSateSaver>
        <section className={styles.section}>
          <Header />
          <Navigation />
          {children}
        </section>
      </RouterSateSaver>
    </>
  );
}
