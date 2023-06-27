import Content from "./Content";
import styles from "./DashBoard.module.css";

interface Props {
  lat: number | undefined;
  lng: number | undefined;
}

export default async function DashBoard({ lat, lng }: Props) {
  return (
    <div className={styles.container}>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
    </div>
  );
}
