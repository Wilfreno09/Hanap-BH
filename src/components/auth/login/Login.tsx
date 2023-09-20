import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.exit}>x</div>
      <form>
        <input type="text" />
        <input type="password" />
      </form>
      <div className={styles.o__auth}>
        <div className={styles.facebook}></div>
        <div className={styles.google}></div>
      </div>
    </div>
  );
}
