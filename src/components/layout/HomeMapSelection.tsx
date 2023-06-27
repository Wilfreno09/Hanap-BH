"use client";
import styles from "./HomeMapSelection.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Link from "next/link";
import { useState } from "react";
export default function HomeMapSelection() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [mapSelected, setMapSelected] = useState(false);
  const fontSize = 36
  const inActiveColor = "#00000066"

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div
          className={homeSelected ? styles.active : styles.inactive}
          onClick={(e) => {
            setHomeSelected(true);
            setMapSelected(false)
          }}
        >
          <Link href="/">
            <HomeOutlinedIcon sx={{fontSize, color: homeSelected ? "primary" : inActiveColor}} />
          </Link>
        </div>
        <div
          className={mapSelected ? styles.active : styles.inactive}
          onClick={(e) => {
            setHomeSelected(false);
            setMapSelected(true)
          }}
        >
          <Link href="/map">
            <MapOutlinedIcon sx={{fontSize, color: mapSelected ? "primary" : inActiveColor  }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
