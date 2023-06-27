import styles from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.background}>
      <section className={styles.image}></section>
      <section className={styles.info}></section>
    </div>
  );
}
