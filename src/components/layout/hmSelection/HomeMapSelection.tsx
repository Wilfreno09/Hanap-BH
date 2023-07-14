"use client";
import styles from "./HomeMapSelection.module.css";
import { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import MapNav from "./MapNav";
import { usePathname } from "next/navigation";

export default function HomeMapSelection() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [mapSelected, setMapSelected] = useState(false);
  const fontSize = 36;
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/") {
      setHomeSelected(true);
      setMapSelected(false);
    } else if (pathname == "/map") {
      setHomeSelected(false);
      setMapSelected(true);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <HomeNav selected={homeSelected} fontSize={fontSize} />
        <MapNav selected={mapSelected} fontSize={fontSize} />
      </div>
    </div>
  );
}
