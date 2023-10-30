"use client";
import styles from "./Login.module.css";

import Link from "next/link";
import LoginCredentials from "./LoginCredentials";
import LoginOauth from "./LoginOauth";
import { usePathname } from "next/navigation";

export default function Login() {
  const path = usePathname();
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
        <Link
          href={path.startsWith("/auth") ? "/auth/signup" : "/signup"}
          as="/auth/signup"
        >
          Sign up
        </Link>
      </h3>
    </>
  );
}
