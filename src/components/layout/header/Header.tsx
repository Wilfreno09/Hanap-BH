import styles from "./Header.module.css";
import SearchFilter from "./search-filter/searchFilter";
import Logo from "./logo/Logo";
import { usePathname } from "next/navigation";
import User from "./auth/User";
import AddPlace from "./add-place/AddPlace";

export default function Header() {
  const pathname = usePathname();

  return (
    <section
      className={`${styles.container} ${
        pathname.startsWith("/map") ? styles.map : styles.default
      }`}
    >
      <Logo />
      <SearchFilter />
      <div className={styles.icons}>
        <AddPlace />
        <User />
      </div>
    </section>
  );
}
