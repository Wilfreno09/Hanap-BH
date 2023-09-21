"use client";
import styles from "./test.module.css";
import images from "./test";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  const [index, setIndex] = useState(0);
  function setImageIndex(n: number) {}
  return (
    <>
      <div className={styles.test}>
        <div className={styles.container}>
          <motion.div drag="x" className={styles.image__container}>
            <Image
              src={images[index]}
              alt={`${images[index]}`}
              className={styles.image}
            />
          </motion.div>
          <button className={styles.prev}></button>
        </div>
      </div>
    </>
  );
}
