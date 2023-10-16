import styles from "./MenuDropDown.module.css";
import NotLoggedInDropDown from "./NotLoggedInDropDown";
import LoggedInDropDown from "./LoggedInDropDown";
import { useSession } from "next-auth/react";

export default function MenuDropDown() {
  const { data: session } = useSession();
  console.log("Session:3333", session);
  // console.log("userSession: ", user_session);
  return <>{session?.user ? <LoggedInDropDown /> : <NotLoggedInDropDown />}</>;
}
