"use client";
import styles from "./MapPage.module.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

export default function MapPage() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    const getData = async () => {
      try {
        const location = await fetch(`/api/map/geolocation`);

        const { lat, lng } = await location.json();

        setLatitude(lat);
        setLongitude(lng);

      } catch (err){ throw err;}
    };

    getData();
  }, []);
  const center = useMemo(() => ({ lat: latitude!, lng: longitude! }), []);
  const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName={styles.map__container}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
}
