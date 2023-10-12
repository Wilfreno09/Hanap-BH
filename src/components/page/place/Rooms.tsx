import { RoomDetailType } from "@/lib/types/google-place-api/room-types";
import styles from "./Rooms.module.css";
export default function Rooms({
  rooms,
  database,
}: {
  rooms: number;
  database: string;
}) {
  if (database === "GOOGLE")
    return (
      <section className={styles.room}>
        <h1>
          The information above are from the GOOGLE's database, no more further
          information for this place
        </h1>
        <h2>
          if this place is yours please register it{""}
          <h2>
            <u>HERE</u>
          </h2>
        </h2>
      </section>
    );
}
