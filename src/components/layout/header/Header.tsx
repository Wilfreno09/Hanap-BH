"use client";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar, IconButton } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" as="/">
          <h1>Hanap-BH</h1>
        </Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.notifs}>
          <ChatBubbleOutlineOutlinedIcon fontSize="large" />
          <NotificationsOutlinedIcon fontSize="large" />
        </div>
        <div className={styles.user}>
          <Link href="/#">
            <Avatar />
            <h3>First Name</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
