import { GoogleMap } from "@react-google-maps/api";

export type LatLngLiteral = google.maps.LatLngLiteral;
export type DirectionalResult = google.maps.DirectionsResult;
export type MapOptions = google.maps.MapOptions;
export type MapType = google.maps.Map;
type GoogleMapsLibrary = (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[];

export type UserLocation = {
  coordinates: LatLngLiteral;
};
