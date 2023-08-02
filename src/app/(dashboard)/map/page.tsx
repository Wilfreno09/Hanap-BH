"use client";
import Map from "@/components/Dashboard/map/Map";
import styles from "@/components/Dashboard/map/Map.module.css";
import { useAppSelector } from "@/lib/redux/store";
import { LatLngLiteral, MapOptions } from "@/lib/types/google-map-type";
import { useEffect, useMemo, useState } from "react";

export default function page() {
  const [center, setCenter] = useState<LatLngLiteral>();

  const mapIsLoaded = useAppSelector(
    (state) => state.mapLoaderStateReducer.mapLaodState
  );

  const userLocation = useAppSelector(
    (state) => state.userLocationReducer.coordinates
  );

  const options = useMemo<MapOptions>(
    () => ({
      restriction: {
        latLngBounds: {
          north: 21.1321,
          south: 4.22599,
          west: 114.095,
          east: 128.604,
        },
        strictBounds: true,
      },
      mapTypeControl: false,
      fullscreenControl: true,
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  useEffect(() => {
    setCenter(userLocation);
  }, [userLocation]);

  return (
    <>
        {mapIsLoaded && <Map center={center!} options={options} />}
    </>
  );
}
