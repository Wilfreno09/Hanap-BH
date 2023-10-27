"use client";
import { useSession } from "next-auth/react";
import styles from "./Auth.module.css";
import { useAppSelector } from "@/lib/redux/store";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();
  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );

  if (status === "authenticated" && data?.user.given_name === "") {
    redirect("/auth/form");
  } else if (status === "authenticated") {
    redirect(redirect_route);
  }
  return (
    <section className={styles.auth}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
