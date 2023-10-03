import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import styles from "./DashboardDetailBox.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import DashboardImage from "./DashboardImage";

export default function DashboardDetailBox({
  place,
}: {
  place: PlaceDetailType;
}) {
  const {
    name,
    location: { vicinity },
    photos,
    rating,
    price,
    database,
  } = place;
  return (
    <div className={styles.detail__box}>
      <DashboardImage photos={photos} name={ name} />
      <div className={styles.details}>
        <div className={styles.location}>
          <h2>{name}</h2>
          <h3>{vicinity}</h3>
        </div>
        <div className={styles.other__details}>
          <h3 className={styles.price}>
            ₱
            {price.min !== undefined ? (
              price.min
            ) : (
              <p className={styles.unknown}> unknown</p>
            )}
            ~ ₱
            {price.max !== undefined ? (
              price.max
            ) : (
              <p className={styles.unknown}> unknown</p>
            )}
          </h3>
          <h3 className={styles.rating}>
            {rating}
            <StarRateIcon />
          </h3>
        </div>
      </div>
    </div>
  );
}
