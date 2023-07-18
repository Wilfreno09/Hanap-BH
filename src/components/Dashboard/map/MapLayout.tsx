import { GoogleMap, Marker } from "@react-google-maps/api";
import styles from "./MapLayout.module.css";
import { useMemo } from "react";
import { UserPropTypes } from "@/lib/types/Props";

export default function MapLayout({ user_lat, user_lng }: UserPropTypes) {
  const center = useMemo(() => ({ lat: user_lat!, lng: user_lng! }), []);
  const options = useMemo(
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
    }),
    []
  );
  return (
    <>
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName={styles.map}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}
