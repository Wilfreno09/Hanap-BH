import { GoogleProfileType } from "./session-type";

declare module "next-auth" {
  interface Profile extends Omit<GoogleProfileType, "password"> {}
}
