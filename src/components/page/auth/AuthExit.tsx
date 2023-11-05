"use client";
import React from "react";
import styles from "./AuthExit.module.css";
import { useRouter } from "next/navigation";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useAppSelector } from "@/lib/redux/store";
export default function AuthExit({ children }: { children?: React.ReactNode }) {
  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );
  return (
    <div className={styles.exit}>
      <a className={styles.button} href={redirect_route}>
        {children ? (
          <h1>{children}</h1>
        ) : (
          <ClearRoundedIcon className={styles.icon} />
        )}
      </a>
    </div>
  );
}
