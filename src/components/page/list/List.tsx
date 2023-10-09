"use client";
import { useEffect, useState } from "react";
import styles from "./List.module.css";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { useAppSelector } from "@/lib/redux/store";
import Card from "./Card";

export default function List() {
  const nearby_place = useAppSelector((state) => state.nearby_places_details);

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
