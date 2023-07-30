import React from "react";

export type PlacePropTypes = {

  place_vicinity: string;
  place_name: string;

  children: React.ReactNode;
};

export interface UserPropTypes {
  user_lat: number;
  user_lng: number;
}

export interface Props {
  selected?: boolean;
  fontSize?: number;
}
