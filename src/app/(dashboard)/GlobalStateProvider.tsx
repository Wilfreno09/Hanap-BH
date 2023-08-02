"use client";

import { setLocation } from "@/lib/redux/slices/user-location-slice";
import { setMapIsLoaded } from "@/lib/redux/slices/map-is-loaded-slice";
import { AppDispatch } from "@/lib/redux/store";
import { useLoadScript } from "@react-google-maps/api";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Props } from "@/lib/types/prop-types";

export default function GlobalStateProvider({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: ["places"],
  });

  dispatch(setMapIsLoaded(isLoaded));
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

  useEffect(() => {
    getGeolocation();
  }, []);

  return <>{children}</>;
}
