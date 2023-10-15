import { Profile } from "next-auth";

export type SessionType = {
  user: {
    given_name: string;
    middle_name?: string;
    family_name: string;
    place_owned?: string[];
    gender?: string;
    birth_date?: Date;
    profile_pic: PhotosType;
    contact: {
      social_media: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
      };
      phone_number?: string[];
    };
    date_created?: Date;
  };
};


export interface GoogleProfileType extends Profile {
    given_name: string,
    family_name: string,
    picture: string
}