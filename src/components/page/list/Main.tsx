"use client";
import styles from "./List.module.css";
import { useAppSelector } from "@/lib/redux/store";
import Card from "./Card";

export default function Main() {
  const nearby_place = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );

  return (
    <div className={styles.list}>
      {nearby_place.length > 1 &&
        nearby_place?.map((place) => (
          <div className={styles.card__list} key={place.place_id}>
            <Card place={place} key={place.place_id} />
          </div>
        ))}
    </div>
  );
}
