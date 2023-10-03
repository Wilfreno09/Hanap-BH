import styles from "./NearbyPlacesMarker.module.css";
import { useEffect, useState } from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setSelectedDetail } from "@/lib/redux/slices/selected-detail-slice";
import { LatLngLiteral, MapType } from "@/lib/types/google-maps-api-type";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
export default function NearbyPlacesMarker({
  user_location,
  map,
}: {
  user_location: LatLngLiteral;
  map: MapType;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const [nearby_places, setNearbyPlaces] = useState<PlaceDetailType[]>([]);

  async function getNearbyPlace() {
    try {
      const response = await fetch("/api/map/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_location),
      });

      const { data } = await response.json();

      setNearbyPlaces(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getNearbyPlace();
  }, [user_location]);
  return (
    <>
      <MarkerClusterer>
        {(clusterer) => (
          <div>
            {nearby_places?.map((place) => (
              <Marker
                clusterer={clusterer}
                key={place.place_id}
                position={place.location.coordinates}
                onClick={() => {
                  map?.panTo(place.location.coordinates);
                  dispatch(
                    setSelectedDetail({
                      place_id: place.place_id,
                    })
                  );
                }}
              />
            ))}
          </div>
        )}
      </MarkerClusterer>
    </>
  );
}
