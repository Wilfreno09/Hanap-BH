import styles from "./MapNav.module.css";
import Link from "next/link";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Props from "@/lib/types/Props";

export default function MapNav({ selected, fontSize }: Props) {
  return (
    <div className={selected ? styles.active : styles.inactive}>
      <Link href="/map" as="/map">
        <MapOutlinedIcon
          sx={{ fontSize}}
          color={selected ? "action": "disabled"}
        />
      </Link>
    </div>
  );
}
