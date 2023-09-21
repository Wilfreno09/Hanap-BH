import { Schema } from "mongoose";
import { LatLngLiteral } from "../google-maps-api-type";
import { UserDetailType } from "../user-detail-type";

export type NearbyPlaceType = {
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
  rating: number;
  vicinity: string;
};


export type RoomDetailType = {
  description: string;
  options: {
    price: number;
    occupant_count: number;
  }[];
  photo: PhotosType[];
};
