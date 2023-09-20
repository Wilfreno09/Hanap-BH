import Login from "@/components/auth/login/Login";
import Modal from "@/components/modal/Modal";
import styles from "./Page.module.css";
export default function page() {
  return (
    <>
      <Modal>
        <Login>
          <h3 className={styles.exit}>x</h3>
        </Login>
      </Modal>
    </>
  );
}
