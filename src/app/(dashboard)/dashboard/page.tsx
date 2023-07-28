import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { PlaceDetail } from "@/lib/types/PlacesInfo";
import { useAppSelector } from "@/lib/redux/store";


export default function page() {
    const [details, setDetails] = useState<PlaceDetail[]>([])
    const coordinate = useAppSelector((state) => state.locationReducer.)
    useEffect(()=>{
        async function getNearbyPlace() {
          const result = await fetch("/api/map/nearby-places");
        
          const details = await result.json();
        
          return details;
        }
      getNearbyPlace();

    },[])
  return (
    <div className={styles.homepage}>
      {placesDetails.map((place, index) => (
        <h3 key={index}>{place.place_id}</h3>
      ))}
    </div>
  );
}
