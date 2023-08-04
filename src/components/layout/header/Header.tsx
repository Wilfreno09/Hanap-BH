import { Avatar, IconButton } from "@mui/material";
import styles from "./Header.module.css";
import Link from "next/link";
import SearchFilter from "./searchFilter/searchFilter";
import Logo from "./Logo";
import Notification from "./Notification";
import UserLogin from "./UserLogin";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <section
      className={`${styles.container} ${
        pathname.startsWith("/map") ? styles.map : styles.default
      }`}
    >
      <Logo />
      <SearchFilter />
      <div className={styles.icons}>
        <Notification />
        <UserLogin />
      </div>
    </section>
  );
}
