import { Props } from "@/lib/types/Props";
import Content from "./Content";
import styles from "./DashBoard.module.css";


export default async function DashBoard({ lat, lng }: Props) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.contents}>
      <Content/>
      </div>
    </div>
    
  );
}