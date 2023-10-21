import Link from "next/link";
import styles from "./NotLoggedInDropDown.module.css";
export default function NotLoggedInDropDown() {
  return (
    <section className={styles.dropdown}>
      <Link href="/auth/login" as="/auth/login">
        <h5>Log in</h5>
      </Link>
      <Link href="/auth/signup">
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
