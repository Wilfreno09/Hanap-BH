import { signIn } from "next-auth/react";
import Image from "next/image";
import facebookImg from "../../../../../public/icons8-facebook.svg";
import googleImg from "../../../../../public/icons8-google.svg";
import styles from "./LoginOauth.module.css";
export default function LoginOauth() {
  return (
    <div className={styles.o__auth}>
      <div className={styles.facebook}>
        <Image
          src={facebookImg}
          alt="facebook icon"
          className={styles.facebook__icon}
        />
        <h3>Continue with Facebook</h3>
      </div>
      <button className={styles.google} onClick={() => signIn("google")}>
        <Image
          src={googleImg}
          alt="google icon"
          className={styles.google__icon}
        />
        <h3>Continue with Google</h3>
      </button>
    </div>
  );
}
