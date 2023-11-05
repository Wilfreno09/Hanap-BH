import Image from "next/image";
import styles from "./AuthLogo.module.css";
import HanapBHImg from "../../../../public/logo.png";

export default function AuthLogo() {
  return (
    <div className={styles.logo}>
      <div className={styles.image__container}>

      <Image
        src={HanapBHImg}
        alt="Hanap BH"
        priority
        className={styles.image}
        />
        </div>
      <h1>Hanap BH</h1>
    </div>
  );
}
