import styles from "./MapNav.module.css";
import Link from "next/link";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { stateProps } from "@/lib/types/stateProps";
import { Props } from "@/lib/types/Props";
import { useRouter } from "next/router";

interface MapProps extends stateProps, Props {
  mapSelected?: boolean;
  homeSelected?: boolean;
}

export default function MapNav({
  mapSelected,
  setMapSelected,
  setHomeSelected,
  fontSize,
  lat,
  lng,
}: MapProps) {
  return (
    <div
      className={mapSelected ? styles.active : styles.inactive}
      onClick={(e) => {
        setHomeSelected(false);
        setMapSelected(true);
      }}
    >
      <Link href="/map">
        <MapOutlinedIcon
          sx={{ fontSize, color: mapSelected ? "primary" : "inActive" }}
        />
      </Link>
    </div>
  );
}
