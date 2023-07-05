import { Avatar } from "@mui/material";
import styles from "./Content.module.css";
import Modal from "./Modal";

export default function Content() {
  return (
    <>
    <div className={styles.content__box}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles.user__details}>
          <Avatar />
          <h3>User Name</h3>
        </div>
      </div>

    </div>
    <Modal/>
    </>
  );
}
