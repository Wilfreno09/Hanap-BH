import { PhotosType } from "./google-place-api/room-types";

export type UserDetailType = {
  id: string
  given_name: string;
  middle_name?: string;
  family_name: string;
  place_owned?: string[];
  gender?: string;
  birth_date?: Date;
  profile_pic: string;
  contact: {
    email: string;
    social_media: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
    phone_number?: string[];
  };
  password?: string;
  date_created?: Date;
};

export type UserLocationType = {
  coordinates: {
    lat?: number;
    lng?: number;
  };
};
