"use client";

import Header from "@/components/layout/header/Header";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setMapCenter } from "@/lib/redux/slices/map-center-slice";
import { useEffect } from "react";
import { setUserLocation } from "@/lib/redux/slices/user-location-slice";
import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/mobile/Navigation";
import { setRedirectRouter } from "@/lib/redux/slices/redirect-route-slice";

export default function layout({ children }: { children: React.ReactNode }) {
  const path_name = usePathname();

  const dispatch = useDispatch<AppDispatch>();

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

  if (!path_name.endsWith("signup") && !path_name.endsWith("login")) {
    dispatch(setRedirectRouter({ route: path_name }));
  }
  return (
    <>
      <Header />
      {children}
      <Navigation />
    </>
  );
}
