import Image from "next/image";
import styles from "./LoadingBar.module.css";
import loading from "../../../public/loading.svg";

export default function LoadingBar() {
  return (
    <div className={styles.container}>
      <Image src={loading} alt="Loading..." />
    </div>
  );
}
