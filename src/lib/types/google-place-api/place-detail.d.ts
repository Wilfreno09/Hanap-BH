import { PhotosType } from "./photos";

export type PlaceDetailType = {
  owner?: UserDetailType;
  place_id: string;
  name: string;
  location: {
    vicinity: string;
    province: string;
    municipality: string;
    barangay: string;
    street: string;
    coordinates: LatLngLiteral;
  };
  photos: PhotosType[];
  price: {
    max?: number;
    min?: number;
  };
  rooms?: number;
  rating: number;
  contact: {
    social_media: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
    phone_number: string[];
  };
  distance: number;
  database: string
  date_created?: Date;
};
