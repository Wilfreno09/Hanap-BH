import { AnimatePresence, motion } from "framer-motion";
import styles from "./DashboardImage.module.css";
import { PhotosType } from "@/lib/types/google-place-api/photos";
import Image from "next/image";
import { useState } from "react";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function DashboardImage({
  photos,
  name,
}: {
  photos: PhotosType[];
  name: string;
}) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");

  const [index, setIndex] = useState<number>(0);
  const [display_next, setDisplayNext] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ overflow: "visible" }}
        className={styles.img__outer__container}
      >
        <div className={styles.img__container}>
          {photos?.length > 0 ? (
            <motion.div
              whileHover={{
                scale: 1.5,
                position: "absolute",
                zIndex: 10,
              }}
              onMouseEnter={() => {
                photos?.length > 0 ? setDisplayNext(true) : null;
              }}
              onMouseLeave={() => {
                setDisplayNext(false);
              }}
            >
              <Image
                src={`https://maps.googleapis.com/maps/api/place/photo?key=${api_key}&photo_reference=${photos[index].photo_url}&maxwidth=1920`}
                alt={name}
                width={1920}
                height={1080}
                className={styles.img}
              />
              <motion.button className={styles.prev}>
                <ArrowBackIosIcon className={styles.prev__icon} />
              </motion.button>
              <motion.button className={styles.next}>
                <ArrowForwardIosIcon className={styles.next__icon} />
              </motion.button>
            </motion.div>
          ) : (
            <ImageNotSupportedIcon className={styles.no__img} />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
