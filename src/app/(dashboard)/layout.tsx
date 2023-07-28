"use client"

import styles from "./layout.module.css";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/navigations/Navigation";
import SearchFilter from "@/components/layout/searchFilter/searchFilter";
import { useEffect } from "react";
import ReduxProvider from "./ReduxProvider";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setLocation } from "@/lib/redux/slices/location-slice";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!navigator.geolocation.getCurrentPosition)
      throw new Error("Location detector is not supported in your browser");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(setLocation({ latitude, longitude }));
      },
      (error) => {
        throw error;
      }
    );
  }, []);

  return (
    <>
      <section className={styles.section}>
        <ReduxProvider>
          <Header />
          <Navigation />
          <SearchFilter />
          {children}
        </ReduxProvider>
      </section>
    </>
  );
}
