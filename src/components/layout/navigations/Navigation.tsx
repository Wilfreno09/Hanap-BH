"use client"

import HomeNav from "./HomeNav";
import MapNav from "./MapNav";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
const pathname = usePathname();

  return (
    <>
      <div className={styles.navigation}>
          {pathname === "/map" && <HomeNav />}
          {pathname === "/dashboard" && <MapNav />}
      </div>
    </>
  );
}
