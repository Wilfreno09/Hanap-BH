import { Avatar, IconButton } from "@mui/material";
import styles from "./Header.module.css";
import Link from "next/link";
import SearchFilter from "./searchFilter/searchFilter";
import Logo from "./Logo";
import Notification from "./Notification";
import UserLogin from "./UserLogin";

export default function Header() {
  return (
    <section className={styles.container}>
      <Logo />
      <SearchFilter />
      <div className={styles.icons}>
        <Notification />
        <UserLogin />
      </div>
    </section>
  );
}
