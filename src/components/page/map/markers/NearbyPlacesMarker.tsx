import styles from "./NearbyPlacesMarker.module.css";
import { useEffect, useState } from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { setSelectedDetail } from "@/lib/redux/slices/selected-detail-slice";
import { LatLngLiteral, MapType } from "@/lib/types/google-maps-api-type";
import { PlaceDetailsType } from "@/lib/types/place-detail";
export default function NearbyPlacesMarker({
  user_location,
  map,
}: {
  user_location: LatLngLiteral;
  map: MapType;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const nearby_places = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  return (
    <>
      {nearby_places?.map((place) => (
        <Marker
          key={place.place_id}
          position={place.location.coordinates}
          onClick={() => {
            map?.panTo(place.location.coordinates);
            dispatch(setSelectedDetail(place));
          }}
        />
      ))}
    </>
  );
}
