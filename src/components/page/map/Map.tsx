"use client";

import styles from "./Map.module.css";
import { useAppSelector } from "@/lib/redux/store";

import { GoogleMap } from "@react-google-maps/api";
import NearbyPlacesMarker from "./markers/NearbyPlacesMarker";
import { MapOptions, MapType } from "@/lib/types/google-maps-api-type";
import { useCallback, useMemo, useState } from "react";
export default function Map() {
  const [map_state, setMapState] = useState<MapType>();
  const map_center = useAppSelector(
    (state) => state.map_center_reducer.coordinates
  );

  const { lat, lng } = map_center;
  const on_load = useCallback((map: MapType) => {
    setMapState(map);
  }, []);

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
      mapId: "671365b374be82",
    }),
    []
  );
  return (
    <>
      {lat !== undefined && lng !== undefined ? (
        <div className={styles.container}>
          <GoogleMap
            zoom={14}
            center={{ lat, lng }}
            mapContainerClassName={styles.map}
            options={options}
            onLoad={on_load}
          >
            {map_state != undefined ? (
              <NearbyPlacesMarker
                map={map_state!}
                user_location={{ lat, lng }}
              />
            ) : null}
          </GoogleMap>
          {/* <DetailPopUp /> */}
        </div>
      ) : null}
    </>
  );
}
