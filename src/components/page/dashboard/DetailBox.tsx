import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import styles from "./DetailBox.module.css";
import Image from "next/image";
import { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function DetailBox({ place }: { place: PlaceDetailType }) {
  const [img_index, setImgIndex] = useState<number>(0);

  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");

  const {
    name,
    location: { vicinity },
    photos,
    rating,
    price,
    database,
  } = place;
  console.log("name: ", name);
  console.log("photo width : ", photos[img_index].width);
  console.log("photo height : ", photos[img_index].height);
  return (
    <div className={styles.detail__box}>
      <div className={styles.outer__image__box}>
        <div className={styles.image__container}>
          {database === "GOOGLE" ? (
            <Image
              src={`https://maps.googleapis.com/maps/api/place/photo?key=${api_key}&photo_reference=${photos[img_index].photo_url}&maxwidth=1920`}
              alt={`${name}`}
              width={1920}
              height={1080}
              className={styles.image}
            />
          ) : (
            <h1>pffttt</h1>
          )}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.location}>
          <h2>{name}</h2>
          <h3>{vicinity}</h3>
        </div>
        <div className={styles.other__details}>
          <h3 className={styles.price}>
            ₱
            {price.min !== undefined ? (
              price.min
            ) : (
              <h3 className={styles.unknown}> unknown</h3>
            )}
            ~ ₱
            {price.max !== undefined ? (
              price.max
            ) : (
              <h3 className={styles.unknown}> unknown</h3>
            )}
          </h3>
          <h3 className={styles.rating}>
            {rating}
            <StarRateIcon />
          </h3>
        </div>
      </div>
    </div>
  );
}
