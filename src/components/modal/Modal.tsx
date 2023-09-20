import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ children }: { children: React.ReactNode }) {
  return <section className={styles.modal}>{children}</section>;
}
