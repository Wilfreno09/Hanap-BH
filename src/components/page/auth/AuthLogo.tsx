import Image from "next/image";
import styles from "./AuthLogo.module.css";
import HanapBHImg from "../../../../public/logo.png";

export default function AuthLogo() {
  return (
    <div className={styles.logo}>
      <Image
        src={HanapBHImg}
        alt="Hanap BH"
        priority
        className={styles.logo__image}
      />
      <h1>Hanap BH</h1>
    </div>
  );
}
