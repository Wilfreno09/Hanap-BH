"use client";
import styles from "./Login.module.css";

import Link from "next/link";
import LoginCredentials from "./LoginCredentials";
import LoginOauth from "./LoginOauth";

export default function Login() {
  return (
    <>
      <LoginCredentials />
      <div className={styles.break}>
        <hr />
        <h2>or</h2>
        <hr />
      </div>
      <LoginOauth />
      <h3 className={styles.sign__up}>
        Don't have Any Account?{" "}
        <Link href="/auth/sign-up" as="/auth/signup">
          Sign up
        </Link>
      </h3>
    </>
  );
}
