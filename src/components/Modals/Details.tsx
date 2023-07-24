import { Avatar, IconButton } from "@mui/material";
import styles from "./Modal.module.css";
import Image from "next/image";
import img from "@/../../public/img/wallpaperflare.com_wallpaper (1).jpg";

export default function Details() {
  return (
    <div className={styles.background}>
      <div className={styles.image}>
        <Image src={img} alt="this is a picture" placeholder="blur" />
      </div>
      <div className={styles.info}>
        <IconButton className={styles.exit}>X</IconButton>
        <Avatar />
        <h3>User Name</h3>
        <h5>Time</h5>
        <div className={styles.details}></div>
      </div>
    </div>
  );
}
