import { useAppSelector } from "@/lib/redux/store";
import ImageNotSupportedSharpIcon from "@mui/icons-material/ImageNotSupportedSharp";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./DetailPopUp.module.css";
import CloseIcon from "@mui/icons-material/Close";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import Card from "../list/Card";
export default function DetailPopUp() {
  const [view, setView] = useState<boolean>(false);
  const place_detail = useAppSelector((state) => state.selected_detail_reducer);

  useEffect(() => {
    if (place_detail.place_id != "") setView(true);
  }, [place_detail.place_id]);

  return view ? (
    <div className={styles.detail__popup}>
      <Card place={place_detail} />
    </div>
  ) : null;
}
