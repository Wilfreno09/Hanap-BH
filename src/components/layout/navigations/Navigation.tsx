"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import MapSharpIcon from "@mui/icons-material/MapSharp";
export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/map") ? (
        <div className={styles.navigation}>
          <Link href="/" as="/">
            <p>See Dashboard</p>
            <GridViewSharpIcon />
          </Link>
        </div>
      ) : (
        <div className={styles.navigation}>
          <Link href="/map" as="/map">
            <p>See Map</p>
            <MapSharpIcon />
          </Link>
        </div>
      )}
    </>
  );
}
