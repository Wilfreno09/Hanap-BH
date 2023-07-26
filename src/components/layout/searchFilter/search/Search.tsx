import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type Props = {
  setSelected: Dispatch<SetStateAction<boolean>>
}
export default function Search({setSelected}:Props ) {
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
            onFocus={() => setSelected(true)}
            onBlur={() => setSelected(false)}
          />
      </form>
    </>
  );
}
