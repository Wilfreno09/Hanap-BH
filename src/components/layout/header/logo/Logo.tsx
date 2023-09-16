import styles from "./Logo.module.css";
import Link from "next/link";
import logoImg from "../../../../../public/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <>
      <Link href="/" as="/" className={styles.logo}>
        <Image
          src={logoImg}
          alt="Logo"
          className={styles.logo__img}
        />
        <h1>Hanap-BH</h1>
      </Link>
    </>
  );
}
