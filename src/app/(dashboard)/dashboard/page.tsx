"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PlaceDetail } from "@/lib/types/PlacesDetails";
import Content from "@/components/Dashboard/home/Content";
import Image from "next/image";
import Link from "next/link";
import LoadingBar from "@/components/loading/LoadingBar";

export default function page() {
  const [details, setDetails] = useState<PlaceDetail[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  async function getNearbyPlace() {
    try {
      const response = await fetch("/api/map/nearby-places");

      const {
        data: { results },
      } = await response.json();
      setDetails(results);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getNearbyPlace();
  }, []);

  return (
    <div className={styles.homepage}>
      {details?.map((detail) =>
        detail.photos && detail.photos.length > 0
          ? JSON.stringify(detail.photos[0].height)
          : null
      )}
      {details.map((place) =>
        place.photos && place.photos.length > 0 ? (
          <div key={place.place_id}>
            <Content place_vicinity={place.vicinity} place_name={place.name}>
              <Link href="/#" as="/#">
                <Image
                  src={`https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photo_reference=${place.photos[0].photo_reference}&maxwidth=${place.photos[0].width}`}
                  alt="place_photo"
                  width={place.photos[0].width}
                  height={place.photos[0].height}
                />
              </Link>
            </Content>
          </div>
        ) : (
          <LoadingBar />
        )
      )}
    </div>
  );
}
