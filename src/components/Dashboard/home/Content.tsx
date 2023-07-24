import { Avatar } from "@mui/material";
import styles from "./Content.module.css";
import Image from "next/image";
import { PlacePropTypes } from "@/lib/types/Props";
import Link from "next/link";
export default function Content({
  place_id,
  place_lat,
  place_lng,
  place_vicinity,
  place_name,
  photo_details,
}: PlacePropTypes) {
  const { width, photo_reference } = photo_details.json();

  return (
    <>
      <Link
        href={{
          pathname: "/details",
          query: {
            place_id,
            place_lat,
            place_lng,
            place_name,
            place_vicinity,
          },
        }}
        as="/details"
      >
        <div className={styles.content__box}>
          <div className={styles.image}>
            <Image
              src={`/api/map/photo?photo_reference=${photo_reference}&width=${width}`}
              alt="place_photo"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.user__details}>
              <Avatar />z<h3>User Name</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
