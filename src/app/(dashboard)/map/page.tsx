import styles from "./Map.module.css";
import LoadingBar from "@/components/loading/LoadingBar";
import { useAppSelector } from "@/lib/redux/store";
import MapLayout from "./MapLayout";
import { LatLngLiteral, MapOptions } from "@/lib/types/google-map-type";
import { useMemo } from "react";

export default function page() {
  const mapIsLoaded = useAppSelector(
    (state) => state.mapLoaderStateReducer.mapLaodState
  );

  const userLocation = useAppSelector(
    (state) => state.userLocationReducer.coordinates
  );

  const center = useMemo<LatLngLiteral>(() => userLocation, [userLocation]);
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

  return (
    <>
      <div className={styles.container}>
        {mapIsLoaded ? (
          <MapLayout center={center} options={options} />
        ) : (
          <LoadingBar />
        )}
      </div>
    </>
  );
}
