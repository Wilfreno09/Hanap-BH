import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import styles from "./PlaceInfo.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function PlaceInfo({
  place_detail,
}: {
  place_detail: PlaceDetailType;
}) {
  return (
    <section className={styles.place__info}>
      <h1>{place_detail?.name}</h1>
      <a href="" className={styles.location}>
        <LocationOnIcon className={styles.location__icon} />
        <h2>{place_detail?.location.vicinity}</h2>
      </a>
    </section>
  );
}
