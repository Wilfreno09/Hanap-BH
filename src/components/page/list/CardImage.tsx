import { AnimatePresence, motion } from "framer-motion";
import styles from "./CardImage.module.css";
import { PhotosType } from "@/lib/types/google-place-api/photos";
import Image from "next/image";
import { useState } from "react";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function CardImage({
  photos,
  name,
}: {
  photos: PhotosType[];
  name: string;
}) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");

  const [index, setIndex] = useState<number>(0);

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
    <AnimatePresence initial={false}>
      <motion.div
        whileHover={{ overflow: "visible" }}
        className={styles.img__outer__container}
      >
        <div className={styles.img__container}>
          {photos?.length > 0 ? (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              key={index}
              whileHover={{
                scale: 1.5,
                position: "absolute",
                zIndex: 10,
              }}
              onMouseEnter={() => {
                setTimeout(() => {
                  if (index === photos?.length - 1) {
                    setIndex(0);
                    return;
                  }
                  setIndex((prev) => prev + 1);
                }, 2000);
              }}
            >
              <Image
                src={`https://maps.googleapis.com/maps/api/place/photo?key=${api_key}&photo_reference=${photos[index].photo_url}&maxwidth=1920`}
                alt={name}
                width={1920}
                height={1080}
                className={styles.img}
              />
              <LocationOnIcon className={styles.location__icon} />
            </motion.div>
          ) : (
            <>
              <ImageNotSupportedIcon className={styles.no__img} />
              <LocationOnIcon className={styles.location__icon} />
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
