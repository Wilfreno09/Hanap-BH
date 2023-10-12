"use client";

import images from "./test";
import Image from "next/image";
import styles from "./test.module.css";
import { useState } from "react";
export default function page() {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className={styles.test}>
      <div className={styles.image__container}>
        <div className={styles.outer__main__image__container}>
          <div className={styles.main__image__container}>
            <Image
              src={images[index]}
              alt={`${images[index]}`}
              className={styles.main__image}
            />
          </div>
        </div>
        { 
          <div className={styles.outer__mini__images__container}>
            {images.slice(0, 4).map((image, index) => (
              <div key={index} className={styles.mini__images__container}>
                <Image
                  src={image}
                  alt={`${image}`}
                  className={styles.mini__image}
                  onClick={() => setIndex(index)}
                />
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
