import { LatLngLiteral } from "./google-map-type";

export type PlaceDetail = {
  geometry: {
    location: LatLngLiteral;
  };
  name: string;
  photos: [
    {
      height: number;
      width: number;
      photo_reference: string;
    }
  ];
  place_id: string;
  vicinity: string;
};
