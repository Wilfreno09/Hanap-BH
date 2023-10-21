"use client";
import React from "react";
import styles from "./AuthExit.module.css";
import { useRouter } from "next/navigation";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
export default function AuthExit({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className={styles.exit}>
      <button className={styles.button} onClick={() => router.back()}>
        {children ? (
          <h1>{children}</h1>
        ) : (
          <ClearRoundedIcon className={styles.icon} />
        )}
      </button>
    </div>
  );
}
