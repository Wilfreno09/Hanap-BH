import { GoogleMap, Marker } from "@react-google-maps/api";
import styles from "./MapLayout.module.css";
import { useMemo } from "react";
import { useAppSelector } from "@/lib/redux/store";

export default function MapLayout() {
  const useLocation = useAppSelector((state) => state.locationReducer.location)
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
        center={useLocation}
        mapContainerClassName={styles.map}
        options={options}
      >
        <Marker position={useLocation} />
      </GoogleMap>
    </> 
  );
}
