"use client";
import Link from "next/link";
import styles from "./MenuDropDown.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function MenuDropDown() {
  const pathname = usePathname();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(pathname);
  }, []);
  console.log("Pathanme: ", path);
  return (
    <section className={styles.dropdown}>
      <Link
        href={{
          pathname: `/auth/login?${pathname}`,
        }}
        as="/auth/log-in"
      >
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
