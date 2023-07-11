"use client";

import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Content from "./Display/Content";

export default async function HomePage() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
