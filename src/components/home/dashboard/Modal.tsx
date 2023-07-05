import { Avatar } from "@mui/material";
import styles from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.background}>
      <section className={styles.image}>
      </section>
      <section className={styles.info}>
        <Avatar/>
        <h3>User Name</h3>
        <h5>Time</h5>
        <div className={styles.details}>

        </div>
      </section>
    </div>
  );
}
