import styles from "./Place.module.css";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import PlaceImage from "./PlaceImage";
import Rooms from "./Rooms";
import PlaceInfo from "./PlaceInfo";

export default function Place({
  place_detail,
}: {
  place_detail: PlaceDetailType;
}) {
  return (
    <div className={styles.place}>
      <PlaceImage photos={place_detail?.photos} />
      <PlaceInfo place_detail={place_detail}/>
      <Rooms rooms={place_detail?.rooms!} database={place_detail?.database} />
    </div>
  );
}
  