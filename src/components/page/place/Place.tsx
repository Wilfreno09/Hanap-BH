import styles from "./Place.module.css";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import PlaceImage from "./PlaceImage";
import Rooms from "./Rooms";
import PlaceInfo from "./PlaceInfo";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Place({
  place_detail,
}: {
  place_detail: PlaceDetailType;
}) {
  const router = useRouter();
  return (
    <div className={styles.place}>
      <button onClick={() => router.back()} className={styles.back}>
        <ArrowBackIosIcon className={styles.back__icon} />
        <h1>Back</h1>
      </button>
      <PlaceImage photos={place_detail?.photos} />
      <PlaceInfo place_detail={place_detail} />
      <Rooms rooms={place_detail?.rooms!} database={place_detail?.database} />
    </div>
  );
}
