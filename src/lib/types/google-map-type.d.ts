import { GoogleMap } from "@react-google-maps/api";

export type LatLngLiteral = google.maps.LatLngLiteral;
export type DirectionalResult = google.maps.DirectionsResult;
export type MapOptions = google.maps.MapOptions;
export type MapType = google.maps.Map;

export type UserLocation = {
  coordinates: LatLngLiteral;
};
