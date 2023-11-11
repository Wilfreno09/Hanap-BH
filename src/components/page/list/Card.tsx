import { PlaceDetailType } from "@/lib/types/place-detail";
import styles from "./Card.module.css";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import Link from "next/link";

export default function Card({ place }: { place: PlaceDetailType }) {
  const {
    place_id,
    name,
    location: { vicinity },
    photos,
    rating,
    price,
    distance,
  } = place;
  return (
    <Link href={`place/${place_id}`} className={styles.detail__box}>
      <CardImage photos={photos} name={name} />
      <CardDetails
        name={name}
        vicinity={vicinity}
        rating={rating}
        price={price}
        distance={distance}
      />
    </Link>
  );
}
