import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";

export default function Search() {
  return (
    <>
      <form className={styles.form} autoFocus={false} autoComplete="off">
        <label htmlFor="search">
          <SearchOutlinedIcon />
        </label>
        <input type="text" id="search" className={styles.input} />
      </form>
    </>
  );
}
