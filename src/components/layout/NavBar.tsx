"use client"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import User from '../User';
import { Avatar } from '@mui/material';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import styles from "@/styles/Navbar.module.css"
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <h1>Hanap-BH</h1>
      <div className={styles.search__bar}>
          <SearchRoundedIcon/>
          <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.navbar__icons}>
        <div className={styles.notifs}>
        <Avatar>
          <ChatBubbleRoundedIcon/>
        </Avatar>
        <Avatar>
          <NotificationsRoundedIcon/>
        </Avatar>
        </div>
        <User src="" size={38} firstName="FirstName"/>
      </div>
    </div>
  )
}
