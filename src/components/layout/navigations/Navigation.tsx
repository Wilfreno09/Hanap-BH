import styles from "./Navigation.module.css"
import HomeMapSelection from './homeMapNavigationBar/HomeMapNav'
import LeftMenuBar from "./leftMenuBar/LeftMenuBar"

export default function Navigation() {
  return (
    <>
        <HomeMapSelection/>
        <LeftMenuBar/>
    </>
  )
}
