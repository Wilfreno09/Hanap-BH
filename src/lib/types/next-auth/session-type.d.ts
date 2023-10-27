import { DefaultSession, Profile } from "next-auth";
import { UserDetailType } from "../user-detail-type";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & Omit<UserDetailType, "password">;
  }
}

export interface GoogleProfileType {
  given_name: string;
  family_name: string;
  picture: string;
}
