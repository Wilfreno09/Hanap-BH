import { PhotosType } from "./google-place-api/room-types";

export type UserDetailType = {
  id: string;
  given_name: string;
  midd_name?: string;
  family_name: string;
  place_owned: {
    [{
      place_id: string,
    }];
  };
  gender?: string;
  birth_date?: Date;
  profile_pic: string;
  contact: {
    email: string;
    phone_number: string;
    social_media?: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
  location: UserLocationType;
};

export type UserLocationType = {
  coordinates: {
    lat?: number;
    lng?: number;
  };
};
