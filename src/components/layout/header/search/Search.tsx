"use client"
import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [active, setActive] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  async function getAutocomplete() {
    try {
      const result = await fetch("/api/map/autocomplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: search }),
      });

      const { data } = await result.json();
      setResults(data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={styles.search}>
      <form
        className={`${styles.form} ${active && styles.active}`}
        autoFocus={false}
        autoComplete="off"
      >
        {search !== "" ? (
          <SearchOutlinedIcon className={styles.mini__search__icon} />
        ) : null}
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            clearTimeout(timer!);
            const newTimer = setTimeout(() => {
              getAutocomplete();
            }, 300);
            setTimer(newTimer!);
          }}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          className={styles.input}
        />
        {search !== "" ? (
          <label htmlFor="search">
            <h2
              className={styles.clear__input}
              onClick={() => {
                setSearch("");
              }}
            >
              X
            </h2>
          </label>
        ) : null}
        {/* <ResultDropDown /> */}
      </form>
      <label htmlFor="search" className={styles.search__icon__label}>
        <SearchOutlinedIcon className={styles.search__icon} />
      </label>
    </div>
  );
}
