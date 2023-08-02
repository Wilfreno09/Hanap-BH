"use client";

import { useEffect, useState } from "react";
import styles from "./test.module.css";
import { useAppSelector } from "@/lib/redux/store";
import { LatLngLiteral } from "@/lib/types/google-map-type";

export default function test() {
  const [userCoords, setUserCoords] = useState<LatLngLiteral>();
  const userLocation = useAppSelector(
    (state) => state.userLocationReducer.coordinates
  );
  const mapIsLoaded = useAppSelector(
    (state) => state.mapLoaderStateReducer.mapLaodState
  );
  useEffect(() => {
    setUserCoords(userLocation);
  }, [userLocation]);
  // const center = useMemo<LatLngLiteral>(() => userLocation, [userLocation]);

  return <>
  <pre>{JSON.stringify(userCoords)}</pre>
  {mapIsLoaded && <h1>asdadasdasdasd</h1> }
  </>;
}
