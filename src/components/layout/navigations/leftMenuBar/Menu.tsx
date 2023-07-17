"use client";
import styles from "./Menu.module.css";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
export default function Menu() {
  const [selected, setSelected] = useState("");

  const fontSize = 24;

  return (
    <div className={styles.container}>
      <div className={styles.menu__bar}>
        <div
          className={selected === "menu" ? styles.active : styles.inactive}
          onClick={(e) =>
            setSelected((prev) => (prev === "menu" ? "" : "menu"))
          }
        >
          <MenuOutlinedIcon sx={{ fontSize }} />
        </div>
        <div
          className={
            selected === "addLocation" ? styles.active : styles.inactive
          }
          onClick={(e) =>
            setSelected((prev) => (prev === "addLocation" ? "" : "addLocation"))
          }
        >
          <AddLocationAltOutlinedIcon sx={{ fontSize }} />
        </div>
        <div
          className={selected === "search" ? styles.active : styles.inactive}
          onClick={(e) =>
            setSelected((prev) => (prev === "search" ? "" : "search"))
          }
        >
          <LocationSearchingOutlinedIcon sx={{ fontSize }} />
        </div>
        <div
          className={selected === "filter" ? styles.active : styles.inactive}
          onClick={(e) =>
            setSelected((prev) => (prev === "filter" ? "" : "filter"))
          }
        >
          <TuneOutlinedIcon sx={{ fontSize }} />
          {/* <ul>
          <li className={`${styles.filter__option} ${styles.nearby}`}>
            <SearchOutlinedIcon />
          </li>
          <li className={`${styles.filter__option} ${styles.ratings}`}>
            <StarOutlineOutlinedIcon />
          </li>
        </ul> */}
        </div>
        <div
          className={selected === "faq" ? styles.active : styles.inactive}
          onClick={(e) => setSelected((prev) => (prev === "faq" ? "" : "faq"))}
        >
          <LiveHelpOutlinedIcon sx={{ fontSize }} />
        </div>
      </div>
    </div>
  );
}
