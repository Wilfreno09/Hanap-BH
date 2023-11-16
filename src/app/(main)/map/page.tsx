"use client";

import { useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import loadingSVG from "../../../../public/loading-transparent.svg";
import dynamic from "next/dynamic";
import DetailPopUp from "@/components/page/map/DetailPopUp";
import { useSearchParams } from "next/navigation";
import Error503 from "@/components/page/error/Error503";
import Offline from "@/components/page/error/Offline";
const Map = dynamic(() => import("@/components/page/map/Map"), {
  loading: () => (
    <section className="h-screen w-screen flex items-center justify-center bg-gray-500">
      <Image src={loadingSVG} alt="Loading..." className="h-50 w-auto" />
    </section>
  ),
});
export default function page() {
  const search_param = useSearchParams();
  const error = search_param.get("error");
  if (error === "overload") return <Error503 />;
  if (error === "offline") return <Offline />;
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  if (loadError) throw loadError;
  return (
    <main className="h-screen w-screen">
      <Map is_loaded={isLoaded} />
      <DetailPopUp />
    </main>
  );
}
