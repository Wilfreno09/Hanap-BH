"use client"

import styles from "./HomePage.module.css"
import { useEffect, useState } from "react";
import DashBoard from "./dashboard/DashBoard";


export default  async function HomePage() {
    const [lat, setLat] = useState<number>();
    const [lng, setLng] = useState<number>();

    useEffect(()=>{
      if(!navigator.geolocation) throw new Error("Geolocation is Not available")

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude)
          setLng(position.coords.latitude)
        },
        (error) => {
          throw error;
        }
      );
      
    },[])


  return (
    <div className={styles.homepage}>
      <DashBoard lat={lat} lng={lng}/>
    </div>
  )
}
