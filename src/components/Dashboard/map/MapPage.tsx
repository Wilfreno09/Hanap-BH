"use client";
import Geolocation from "@/lib/Geolocation";
import styles from "./MapPage.module.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

export default function MapPage() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  useEffect(() => {
    const getData = async () => {
      try {
        const geolocation = await Geolocation();

        setLatitude(geolocation.lat);
        setLongitude(geolocation.lng);
      } catch (err) {
        throw err;
      }
    };

    getData();
  }, []);
  const center = useMemo(() => ({ lat: latitude!, lng: longitude! }), []);
  const options = useMemo(
    () => ({
      restriction: {
        latLngBounds: {
          north: 21.1321,
          south: 4.22599,
          west: 114.095,
          east: 126.604,
        },
        strictBounds: true,
      },
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName={styles.map__container}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
}
