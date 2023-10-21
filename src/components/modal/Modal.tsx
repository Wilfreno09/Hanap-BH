"use client";
import React from "react";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <section className={styles.modal}>
      {children}
    </section>
  );
}
