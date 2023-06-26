import { Avatar } from "@mui/material";
import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.content__box}>
      <div className={styles.details}>
        <div className={styles.user__details}>
          <Avatar />
          <h3>User Name</h3>
        </div>
        <h5>time</h5>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          officiis quidem corrupti. Nihil voluptas est laudantium fugiat
          deserunt quae enim.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}
