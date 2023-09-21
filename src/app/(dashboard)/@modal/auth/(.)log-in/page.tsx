"use client";
import Login from "@/components/auth/login/Login";
import Modal from "@/components/modal/Modal";
import styles from "./Page.module.css";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <>
      <Modal>
        <Login>
          <h3 className={styles.exit} onClick={() => router.back()}>
            x
          </h3>
        </Login>
      </Modal>
    </>
  );
}
