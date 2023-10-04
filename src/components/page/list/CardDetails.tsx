import styles from "./CardDetails.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function CardDetails({
  name,
  vicinity,
  rating,
  price,
}: {
  name: string;
  vicinity: string;
  rating: number;
  price: { min?: number; max?: number };
}) {
  return (
    <div className={styles.details}>
      <div className={styles.location}>
        <h1>{name}</h1>
        <h2>{vicinity}</h2>
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
  );
}
