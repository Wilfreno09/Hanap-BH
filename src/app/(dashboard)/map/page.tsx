"use client";

import LoadingBar from "@/components/loading/LoadingBar";
import { useAppSelector } from "@/lib/redux/store";
import MapLayout from "./MapLayout";

export default function page() {
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const mapIsLoaded = useAppSelector(
    (state) => state.mapLoaderStateReducer.mapLaodState
  );

  return <>{mapIsLoaded ? <MapLayout /> : <LoadingBar />}</>;
}
