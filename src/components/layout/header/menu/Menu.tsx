"use client"
import styles from "./Menu.module.css";
import { Avatar } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuDropDown from "./dropdown/MenuDropDown";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [active, setActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setActive(false);
      }
    }
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles.menu} ${active && styles.active}`}
        onClick={() => setActive(true)}
        ref={menuRef}
      >
        <MenuSharpIcon className={styles.menu__icon} />
        <Avatar
          sx={{ width: 32, height: 32 }}
          className={styles.avatar__icon}
        />
        {active && <MenuDropDown />}
      </div>
    </>
  );
}
