import styles from "./MenuDropDown.module.css";
import NotLoggedInDropDown from "./NotLoggedInDropDown";
import LoggedInDropDown from "./LoggedInDropDown";
import { useSession } from "next-auth/react";

export default function MenuDropDown() {
  const session = useSession();
  return <>{session.status === "authenticated" ? <LoggedInDropDown /> : <NotLoggedInDropDown />}</>;
}
