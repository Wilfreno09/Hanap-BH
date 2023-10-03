import styles from "./Header.module.css";
import Logo from "./logo/Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";
import { useEffect, useState } from "react";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setUserLocation } from "@/lib/redux/slices/user-location-slice";

export default function Header() {
  const pathname = usePathname();

  return (
    <section
      className={`${styles.header} ${
        pathname.startsWith("/map") ? styles.map : styles.default
      }`}
    >
      <Logo />
      <Search />
      <div className={styles.icons}>
        <AddPlace />
        <Menu />
      </div>
    </section>
  );
}
