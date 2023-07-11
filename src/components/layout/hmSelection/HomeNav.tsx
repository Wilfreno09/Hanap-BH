import { stateProps } from "@/lib/types/stateProps";
import styles from "./HomeNav.module.css";
import { Props } from "@/lib/types/Props";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

interface HomeProps extends stateProps, Props {
  mapSelected?: boolean;
  homeSelected?: boolean;
}

export default function HomeNav({
  setHomeSelected,
  homeSelected,
  setMapSelected,
  fontSize,
  lat,
  lng,
}: HomeProps) {
  setHomeSelected(true)
  return (
    <div
      className={homeSelected ? styles.active : styles.inactive}
      onClick={(e) => {
        setHomeSelected(true);
        setMapSelected(false);
      }}
    >
      <Link href="/">
        <HomeOutlinedIcon
          sx={{ fontSize, color: homeSelected ? "primary" : "inActive" }}
        />
      </Link>
    </div>
  );
}
