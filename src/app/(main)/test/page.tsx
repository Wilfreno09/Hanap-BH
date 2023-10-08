"use client";

import getDistance from "@/lib/google-api/distance";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const distance = getDistance(
      { lat: 8.478045700000001, lng: 124.6518732 },
      { lat: 8.485, lng: 124.648 }
    );

    console.log("distance: ", distance);
  }, []);
  return <div>page</div>;
}
