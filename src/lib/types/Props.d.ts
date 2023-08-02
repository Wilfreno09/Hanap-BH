import React from "react";

export type PlacePropTypes = {
  place_vicinity: string;
  place_name: string;
  photo_reference: string;
  width: number;
  height: number;
};

export type UserPropTypes = {
  user_lat: number;
  user_lng: number;
};

export type Props = {
  selected?: boolean;
  fontSize?: number;
  children?: React.ReactNode;
};

export type UserLocation = {
  location: google.maps.LatLngLiteral;
};
