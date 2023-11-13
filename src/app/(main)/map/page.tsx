"use client";

import Map from "@/components/page/map/Map";
import { useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import loadingSVG from "../../../../public/loading-transparent.svg";
export default function page() {
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  console.log("error: ", loadError)
  return (
    <main>
      {isLoaded ? (
        <Map />
      ) : (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-500">
          <Image src={loadingSVG} alt="Loading..." className="h-50 w-auto" />
        </div>
      )}
    </main>
  );
}
