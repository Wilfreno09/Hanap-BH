import { Schema } from "mongoose";
import { LatLngLiteral } from "../google-maps-api-type";
import { UserDetailType } from "../user-detail-type";



export type RoomDetailType = {
  description: string;
  options: {
    price: number;
    occupant_count: number;
  }[];
  photo: PhotosType[];
};
