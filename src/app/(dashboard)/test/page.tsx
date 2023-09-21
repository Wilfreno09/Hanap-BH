"use client";
import styles from "./test.module.css";
import images from "./test";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
export default function page() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: {
          duration: 0.2,
        },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: {
            duration: 0.2,
          },
        },
      };
    },
  };

  function setImageIndex(n: number) {
    const current = index + n;
    setDirection(n);
    if (current < 0) {
      setIndex(images.length - 1);
      return;
    }
    if (current > images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(current);
  }
  return (
    <>
      <div className={styles.test}>
        <div className={styles.container}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={index}
              custom={direction}
              className={styles.image__container}
            >
              <Image
                src={images[index]}
                alt={`${images[index]}`}
                className={styles.image}
              />
            </motion.div>
          </AnimatePresence>
          <button className={styles.prev} onClick={() => setImageIndex(-1)}>
            {"<"}
          </button>
          <button className={styles.next} onClick={() => setImageIndex(1)}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
