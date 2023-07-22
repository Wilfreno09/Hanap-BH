import { Avatar } from "@mui/material";
import styles from "./Content.module.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PlacePropTypes } from "@/lib/types/Props";
import exImg from "../../../../public/img/wallpaperflare.com_wallpaper (1).jpg"
export default function Content({
  place_id,
  place_lat,
  place_lng,
  place_vicinity,
  photo,
  place_name,
}: PlacePropTypes) {
  const [selected, setSelected] = useState(false);
  const [img, setImg] = useState([]);

  async function getPhoto() {
    try {
      const result = fetch(`/api/map/photo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            photo_reference: photo.photoReference,
            maxwidth: photo.width
        })
      });

    } catch (err) {
      throw err;
    }
  }
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.content__box} onClick={(e) => setSelected(true)}>
        <div className={styles.image}>
          <Image src={exImg} alt="place_photo"  />
        </div>
        <div className={styles.details}>
          <div className={styles.user__details}>
            <Avatar />
            <h3>User Name</h3>
          </div>
        </div>
      </div>
      {selected && <Modal contentSelected={setSelected} />}
    </>
  );
}
