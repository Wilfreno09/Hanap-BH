import Link from "next/link";
import styles from "./MenuDropDown.module.css";

export default function MenuDropDown() {
  return (
    <section className={styles.dropdown}>
      <Link href="/auth/log-in" as="/auth/log-in">
        <h5>Log in</h5>
      </Link>
      <Link href="/test">
        <h5>Sign up</h5>
      </Link>
      <hr style={{ margin: "10px 0" }} />
      <Link href="/test">
        <h5>Add Your Bouarding House</h5>
      </Link>
      <Link href="/test">
        <h5>FAQ</h5>
      </Link>
    </section>
  );
}
