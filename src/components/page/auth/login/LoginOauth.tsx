import { signIn } from "next-auth/react";
import Image from "next/image";
import facebookImg from "../../../../../public/icons8-facebook-f.svg";
import googleImg from "../../../../../public/icons8-google.svg";
import styles from "./LoginOauth.module.css";
export default function LoginOauth() {
  return (
    <div className={styles.o__auth}>
      <button className={styles.facebook}>
        <Image
          src={facebookImg}
          alt="facebook icon"
          className={styles.facebook__icon}
        />
        <h3>Login with Facebook</h3>
      </button>
      <button className={styles.google} onClick={() => signIn("google")}>
        <Image
          src={googleImg}
          alt="google icon"
          className={styles.google__icon}
        />
        <h3>Login with Google</h3>
      </button>
    </div>
  );
}
