import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  return (
    <>
      <label htmlFor="search" >
        <SearchOutlinedIcon />
      </label>
      <input type="text" id="search" className={styles.input}/>
    </>
  );
}
