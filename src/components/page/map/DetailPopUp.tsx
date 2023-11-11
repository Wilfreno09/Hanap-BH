import { useAppSelector } from "@/lib/redux/store";
import { useEffect, useState } from "react";
import styles from "./DetailPopUp.module.css";
export default function DetailPopUp() {
  const [view, setView] = useState<boolean>(false);
  const place_detail = useAppSelector((state) => state.selected_detail_reducer);

  useEffect(() => {
    if (place_detail.place_id != "") setView(true);
  }, [place_detail.place_id]);

  return view ? <div className={styles.detail__popup}></div> : null;
}
