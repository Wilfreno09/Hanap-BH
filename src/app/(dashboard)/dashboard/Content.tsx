import { Avatar } from "@mui/material";
import styles from "./dashboard.module.css";
import Image from "next/image";
import { PlacePropTypes } from "@/lib/types/Props";
import Link from "next/link";
export default function Content({
  place_vicinity,
  place_name,
  photo_reference,
  width,
  height
}: PlacePropTypes) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <Link href="/#" as="/#">
        <Image
          src={`https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photo_reference=${photo_reference}&maxwidth=${width}`}
          alt="place_photo"
          width={1920}
          height={1080}
          quality={90}
          priority
          style={{
            height: "30vh",
            width: "auto",
            objectFit: "cover",
          }}
        />
      </Link>
    </>
  );
}
