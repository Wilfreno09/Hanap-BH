"use client"

import { usePathname } from "next/navigation";
import styles from "./Dashboard.module.css";
import HomePage from "./home/HomePage";
import MapPage from "./map/MapPage";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const pathname = usePathname();
  const [path, setPath] = useState<string>();

  useEffect(() => {
    setPath(pathname);
    console.log("path:", pathname)
  }, [pathname]);

  switch (path) {
    case "/":
      return (
        <>
          <HomePage />
        </>
      );
    case "/map":
      return (
        <>
          <MapPage />
        </>
      );
    default:
      return null;
  }
}
