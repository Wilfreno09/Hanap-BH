import styles from "./HomeNav.module.css";
import Props from "@/lib/types/Props";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function HomeNav({ selected, fontSize }: Props) {
  return (
    <div className={selected ? styles.active : styles.inactive}>
      <Link href="/" as="/">
        <HomeOutlinedIcon
          sx={{ fontSize }}
          color={selected ? "action" : "disabled"}
        />
      </Link>
    </div>
  );
}
