import Content from "./Content";
import styles from "./NewsFeed.module.css";

interface Props {
  lat: number | undefined;
  lng: number | undefined;
}

export default async function NewsFeed({ lat, lng }: Props) {
  return (
    <div className={styles.container}>
      {/* <Content/> */}
    </div>
  );
}
