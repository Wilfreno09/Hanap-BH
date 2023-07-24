"use client";
import Filter from "./filterOption/Filter";
import Search from "./search/Search";
import styles from "./searchFilter.module.css";

export default function SearchFilter() {
  return (
    <div className={styles.searchFilter}>
      <div className={styles.search}>
        <Search />
      </div>
      <Filter />
    </div>
  );
}
