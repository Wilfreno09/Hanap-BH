import styles from "./Notification.module.css";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function Notification() {
  return (
    <div className={styles.notifs}>
      <IconButton className={styles.notif__icon}>
        <ChatBubbleOutlineOutlinedIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.notif__icon}>
        <NotificationsOutlinedIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
