"use client";
import Login from "@/components/auth/login/Login";
import styles from "./Page.module.css";
import { useRouter } from "next/navigation";
export default function page() {
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
