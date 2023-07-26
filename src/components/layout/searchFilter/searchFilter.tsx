"use client";
import { useState } from "react";
import Filter from "./filterOption/Filter";
import Search from "./search/Search";
import styles from "./searchFilter.module.css";

export default function SearchFilter() {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className={selected ? styles.searchFilter : styles.inactive}>
      <Search setSelected={setSelected}/>
      <Filter />
    </div>
  );
}
