import styles from "./Navigation.module.css";
import Link from "next/link";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export default function MapNav() {
  return (
    <>
      <div className={styles.map__nav}>
        <Link href="/map" as="/map">
          <MapOutlinedIcon />
        </Link>
      </div>
    </>
  );
}
