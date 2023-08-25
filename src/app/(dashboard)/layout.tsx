"use client";

import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import { useEffect, useMemo } from "react";
import { setMapIsLoaded } from "@/lib/redux/slices/map-is-loaded-slice";
import { useLoadScript } from "@react-google-maps/api";
import { setLocation } from "@/lib/redux/slices/user-location-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { GoogleMapsLibrary } from "@/lib/types/google-map-type";
import { Libraries } from "use-google-maps-script";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  const dispatch = useDispatch<AppDispatch>();
  // const libraries = useMemo<GoogleMapsLibrary>(() => ["places"], []);

  function getGeolocation() {
    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(
          setLocation({ coordinates: { lat: latitude, lng: longitude } })
        );
      },
      (error) => {
        throw error;
      }
    );
  }

  const libraries: Libraries = ["places"];
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  dispatch(setMapIsLoaded(isLoaded));

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <Header />
        <Navigation />
        {children}
      </section>
    </>
  );
}
