// import "@/components/Dashboard/map/markers/InfoWindow.css";

import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import BoySharpIcon from "@mui/icons-material/BoySharp";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";
export default function UserMarker({
  user_location,
}: {
  user_location: LatLngLiteral;
}) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <>
      {clicked ? (
        <InfoWindow
          position={user_location}
          onCloseClick={() => setClicked(false)}
        >
          <div>
            <h1>You are Hereeeeeeeeeee!</h1>
          </div>
        </InfoWindow>
      ) : (
        <Marker position={user_location} onClick={() => setClicked(true)} />
      )}
    </>
  );
}
