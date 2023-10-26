"use client";
import { useSession } from "next-auth/react";
import styles from "./Auth.module.css";
import { useAppSelector } from "@/lib/redux/store";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );
  console.log(session);

  if (session.status !== "unauthenticated") {
    redirect(redirect_route);
  }
  return (
    <section className={styles.auth}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
