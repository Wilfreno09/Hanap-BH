"use client";
import { useSession } from "next-auth/react";
import styles from "./Auth.module.css";
import { useAppSelector } from "@/lib/redux/store";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import HanapBHImg from "../../../../public/logo.png";

export default function Auth({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );

  useEffect(() => {
    if (session) {
      redirect(redirect_route);
    }
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.logo}>
        <Image src={HanapBHImg} alt="Hanap BH" />
        <h1>Hanap BH</h1>
      </div>
      {children}
    </div>
  );
}
