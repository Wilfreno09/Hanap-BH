import styles from "./Header.module.css";
import Logo from "./logo/Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search-filter/Search";
import Menu from "./menu/Menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <section
      className={`${styles.header} ${
        pathname.startsWith("/map") ? styles.map : styles.default
      }`}
    >
      <Logo />
      <Search />
      <div className={styles.icons}>
        <AddPlace />
        <Menu />
      </div>
    </section>
  );
}
