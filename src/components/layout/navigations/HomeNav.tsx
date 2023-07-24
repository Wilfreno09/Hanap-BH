import styles from "./Navigation.module.css";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Props } from "@/lib/types/Props";

export default function HomeNav() {
  return (
    <div className={styles.home__nav}>
      <Link href="/" as="/" >
        <HomeOutlinedIcon  />
      </Link>
    </div>
  );
}
