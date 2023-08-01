"use client";

import { setLocation } from "@/lib/redux/slices/location-slice";
import { setMapIsLoaded } from "@/lib/redux/slices/map-is-loaded-slice";
import { AppDispatch } from "@/lib/redux/store";
import { useLoadScript } from "@react-google-maps/api";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  children: React.ReactNode;
};
export default function GlobalStateProvider({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  function getGeolocation() {
    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        dispatch(setLocation({ latitude, longitude }));
      },
      (error) => {
        throw error;
      }
    );
  }

  dispatch(setMapIsLoaded(isLoaded));
  useEffect(() => {
    getGeolocation();
  }, []);

  return <>{children}</>;
}
