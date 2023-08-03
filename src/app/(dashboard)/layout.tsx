"use client";

import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import SearchFilter from "@/components/layout/header/searchFilter/searchFilter";
import { useEffect, useMemo } from "react";
import { setMapIsLoaded } from "@/lib/redux/slices/map-is-loaded-slice";
import { useLoadScript } from "@react-google-maps/api";
import { setLocation } from "@/lib/redux/slices/user-location-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { GoogleMapsLibrary } from "@/lib/types/google-map-type";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const libraries = useMemo<GoogleMapsLibrary>(() => ["places"], []);

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
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
