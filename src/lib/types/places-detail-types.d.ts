import mongoose from "mongoose";
import { LatLngLiteral } from "./google-map-type";

export type PlaceDetailType = {

  owner?: mongoose.SchemaType.ObjectId;
  
  place_id: string;
  
  vicinity: string;
  
  location: {
    province?: string;
    monicipality?: string;
    city?: string;
    barangay?: string;
    coordinate: LatLngLiteral;
  };
  
  name: string;
  
  photos: [
    {
      height: number;
      width: number;
      photo_reference: string;
    }
  ];
};
