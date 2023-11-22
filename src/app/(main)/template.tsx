"use client";

import Error408 from "@/components/page/error/Error408";
import Offline from "@/components/page/error/Offline";
import { setMapCenter } from "@/lib/redux/slices/map-center-slice";
import { setNearbyPlaceDetails } from "@/lib/redux/slices/nearby-place-detail-slice";
import { setNextPageToken } from "@/lib/redux/slices/next-page-token-slice";
import { setUserLocation } from "@/lib/redux/slices/user-location-slice";
import { AppDispatch } from "@/lib/redux/store";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Template({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LatLngLiteral>();
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const search_param = useSearchParams();

  const error = search_param.get("error");

  async function getNearbyPlaces() {
    try {
      const api_response = await fetch(
        `/api/nearby-places?lat=${location?.lat}&lng=${location?.lng}`,
        { cache: "no-store" }
      );
      if (api_response.status === 408) {
        router.replace("/map?error=408");
        return;
      }
      if (api_response.status === 500) {
        router.replace("/map?error=500");
        return;
      }
      const { data, next_page_token } = await api_response.json();
      dispatch(setNearbyPlaceDetails(data));
      dispatch(setNextPageToken(next_page_token));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (!navigator.onLine) router.replace(`/?error=offline`);

    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
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
          setUserLocation({ coordinates: { lat: latitude, lng: longitude } })
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
  useEffect(() => {
    if (location?.lat !== undefined && location.lng !== undefined) {
      getNearbyPlaces();
    }
  }, [location]);
  if (error === "408") return <Error408 />;
  if (error === "offline") return <Offline />;
  return <div>{children}</div>;
}
