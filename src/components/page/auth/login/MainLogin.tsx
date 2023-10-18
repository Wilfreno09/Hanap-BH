"use client";
import { useRouter } from "next/navigation";
import Login from "./Login";
import styles from "./MainLogin.module.css";
export default function MainLogin() {
  const router = useRouter();

  return (
    <section className={styles.page}>
      <div className={styles.exit} onClick={() => router.back()}>
        <h3>{"< Go back"} </h3>
      </div>
      <Login />
    </section>
  );
}
