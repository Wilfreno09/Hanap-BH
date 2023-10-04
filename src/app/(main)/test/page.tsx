"use client";
import styles from "./test.module.css";
import images from "./test";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
export default function page() {
  const [index, setIndex] = useState(0);
  const variants = {
    initial: {
      x: 500,
      opacity: 0,
      scale: 1.3,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1.3,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <>
      <div className={styles.test}>
        <AnimatePresence initial={false} >
          <motion.div
            whileHover={{ overflow: "visible" }}
            className={styles.container}
          >
            <div className={styles.image__container}>
              <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                key={index}
                whileHover={{ scale: 1.3 }}
                onMouseEnter={() => {
                  setTimeout(() => {
                    if (index === (images.length - 1)) {
                      setIndex(0);
                      console.log("index2: ", index);

                      return;
                    }
                    
                    setIndex((prev) => prev + 1);
                    console.log("index1: ", index);
                  }, 1000);
                }}
              >
                <Image
                  src={images[index]}
                  alt={`${images[index]}`}
                  className={styles.image}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
