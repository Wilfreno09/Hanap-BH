import styles from "./UserLogin.module.css";
import { Avatar } from "@mui/material";
import Link from "next/link";

export default function UserLogin() {
  return (
    <div className={styles.user}>
      <Link href="/#" className={styles.avatar}>
        <Avatar sx={{ width: 32, height: 32 }} />
        <h5>First Name</h5>
      </Link>
    </div>
  );
}
