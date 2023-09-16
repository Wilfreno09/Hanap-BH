import Link from "next/link";
import styles from "./AddPlace.module.css";

export default function AddPlace() {
  return (
    <div>
      <Link href="#">
        <h5
          style={{
            fontSize: "14px",
            fontWeight: "500",
            flexWrap: "nowrap",
          }}
        >
          Add Your boarding House +{" "}
        </h5>
      </Link>
    </div>
  );
}
