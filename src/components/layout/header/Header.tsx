"use client";
import { Avatar, IconButton } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeNav from "../navigations/HomeNav";
import MapNav from "../navigations/MapNav";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.header__left}>
        <Link href="/" as="/">
          <h1>Hanap-BH</h1>
        </Link>
      </div>
      <div className={styles.header__right}>
        <div className={styles.notifs}>
          <IconButton className={styles.notif__icon}>
            <ChatBubbleOutlineOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton className={styles.notif__icon}>
            <NotificationsOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className={styles.user}>
          <Link href="/#" className={styles.avatar}>
            <Avatar />
            <h3>First Name</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
