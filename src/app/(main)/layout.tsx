"use client";

import Header from "@/components/layout/header/Header";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { setMapCenter } from "@/lib/redux/slices/map-center-slice";
import { useEffect } from "react";
import { setUserLocation } from "@/lib/redux/slices/user-location-slice";
import { setNearbyPlaceDetails } from "@/lib/redux/slices/nearby-place-detail-slice";
import RouterSateSaver from "@/components/RouterSateSaver";
import { useSearchParams } from "next/navigation";
import MenuDropDown from "@/components/layout/header/menu/dropdown/MenuDropDown";
import Navigation from "@/components/layout/mobile/Navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  const search_params = useSearchParams();
  const open_menu = search_params.get("open_menu");
  const dispatch = useDispatch<AppDispatch>();
  const current_location = useAppSelector(
    (state) => state.user_location_reducer.coordinates
  );
  async function getNearbyPlaces() {
    try {
      const response = await fetch(
        `/api/nearby-places?lat=${current_location.lat}&lng=${current_location.lng}`
      );

      const { data } = await response.json();
      dispatch(setNearbyPlaceDetails(data));
      console.log("DATA: ", data);
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
        <Header />
        {open_menu === "true" ? <MenuDropDown /> : null}
        {children}
        <Navigation />
      </RouterSateSaver>
    </>
  );
}
