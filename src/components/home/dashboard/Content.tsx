import { Avatar } from "@mui/material";
import styles from "./Content.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function Content() {
  const [selected, setSelected] = useState(false);
  return (
    <>
    <div className={styles.content__box} onClick={(e) => setSelected(true)}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles.user__details}>
          <Avatar />
          <h3>User Name</h3>
        </div>
      </div>

    </div>
    {selected && <Modal contentSelected={setSelected}/>}
    </>
  );
}
