import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import styles from "./Card.module.css";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

export default function Card({ place }: { place: PlaceDetailType }) {
  const {
    name,
    location: { vicinity },
    photos,
    rating,
    price,
  } = place;
  const replaced_name = name.replace(/ /g, "-");
  return (
    <a
      href={`place-detail/${replaced_name}`}
      className={styles.detail__box}
    >
      <CardImage photos={photos} name={name} />
      <CardDetails
        name={name}
        vicinity={vicinity}
        rating={rating}
        price={price}
      />
    </a>
  );
}
