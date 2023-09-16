import Link from "next/link";
import styles from "./AddPlace.module.css";

export default function AddPlace() {
  return (
    <div>
      <Link href="/test">
        <h5 className={styles.add__place}>Add Your boarding House</h5>
      </Link>
    </div>
  );
}
