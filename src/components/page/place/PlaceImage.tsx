import styles from "./PlaceImage.module.css";
import Image from "next/image";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import { useState } from "react";
import { PhotosType } from "@/lib/types/google-place-api/photos-type";

export default function PlaceImage({ photos }: { photos: PhotosType[] }) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");

  const [photo_index, setPhotoIndex] = useState<number>(0);
  return (
    <section className={styles.image__section}>
      <div className={styles.outer__main__image__container}>
        {photos?.length > 0 ? (
          <div className={styles.main__image__container}>
            <Image
              src={`https://maps.googleapis.com/maps/api/place/photo?key=${api_key}&photo_reference=${photos[photo_index].photo_url}&maxwidth=1920`}
              alt={photos[photo_index].reference}
              width={1920}
              height={1080}
              className={styles.main__image}
              priority
            />
          </div>
        ) : (
          <div className={styles.main__image__container}>
            <ImageNotSupportedIcon className={styles.main__image} />
          </div>
        )}
      </div>
      <div className={styles.outer__mini__image__container}>
        {photos?.length > 0 ? (
          photos?.map((photo, index) => (
            <div className={styles.mini__image__container} key={index}>
              <Image
                src={`https://maps.googleapis.com/maps/api/place/photo?key=${api_key}&photo_reference=${photo.photo_url}&maxwidth=1920`}
                alt={photo.reference}
                width={1920}
                height={1080}
                className={styles.mini__image}
                onClick={() => setPhotoIndex(index)}
                priority
              />
            </div>
          ))
        ) : (
          <ImageNotSupportedIcon className={styles.mini__image} />
        )}
      </div>
    </section>
  );
}
