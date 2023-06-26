import styles from "./Menu.module.css";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
export default function Menu() {
  return (
    <div className={styles.menu__bar}>
      <div className={`${styles.menu__option} ${styles.add__post}`}>
        <AddLocationAltOutlinedIcon/>
      </div>
      <div className={`${styles.menu__option} ${styles.search__place}`}>

      </div>
      <div className={`${styles.menu__option} ${styles.filters}`}>
            <div className={`${styles.filter__option} ${styles.nearby}`}>

            </div>
            <div className={`${styles.filter__option} ${styles.ratings}`}>

            </div>
            <div className={`${styles.filter__option} ${styles.availability}`}>

            </div>
            
      </div>
      <div className={`${styles.menu__option} ${styles.faq}`}>

      </div>
    </div>
  );
}
