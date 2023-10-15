import styles from "./MenuDropDown.module.css";
import { SessionType } from "@/lib/types/session-type";
import NotLoggedInDropDown from "./NotLoggedInDropDown";
import LoggedInDropDown from "./LoggedInDropDown";
import { useSession } from "next-auth/react";

export default function MenuDropDown() {
  const { data: session } = useSession();
  const convert = session as unknown;
  // const user_session = convert as SessionType;
  console.log("Session: ", session);
  // console.log("userSession: ", user_session);
  return (
    <>{session?.user?.name ? <LoggedInDropDown /> : <NotLoggedInDropDown />}</>
  );
}
