import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  return (
    <>
      <form
        className={styles.search}
      >
          <label htmlFor="search">
            <SearchOutlinedIcon />
          </label>
          <input
            type="text"
            id="search"
            className={ styles.input}
          />
      </form>
    </>
  );
}
