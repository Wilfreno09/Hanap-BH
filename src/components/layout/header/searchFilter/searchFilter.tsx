import { useEffect, useRef, useState } from "react";
import Filter from "./filterOption/Filter";
import Search from "./search/Search";
import styles from "./searchFilter.module.css";

export default function SearchFilter() {
  const [clicked, setClicked] = useState<boolean>(false);
  const searchFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!searchFilterRef.current?.contains(e.target as Node)) {
        setClicked(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`${styles.searchFilter} ${clicked && styles.active}`}
      onClick={() => setClicked(true)}
      ref={searchFilterRef}
    >
      <Search />
      <Filter />
    </div>
  );
}
