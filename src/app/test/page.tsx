"use client";

import { useEffect, useState } from "react";

export default  function test() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    const getData = async () => {
      try {
        const location = await fetch(`/api/map/geolocation`);

        const { lat, lng } = await location.json();

        
        setLatitude(lat);
        setLongitude(lng);
        console.log(`lat: ${latitude}`, `lng: ${longitude}`)
      } catch (err){ throw err;}
    };

    getData();
  }, []);

  return (
    <>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
    </>
  );
}
