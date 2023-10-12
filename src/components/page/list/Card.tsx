import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import styles from "./Card.module.css";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

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
    <a href={`place/${place_id}`} className={styles.detail__box}>
      <CardImage photos={photos} name={name} />
      <CardDetails
        name={name}
        vicinity={vicinity}
        rating={rating}
        price={price}
        distance={distance}
      />
    </a>
  );
}
