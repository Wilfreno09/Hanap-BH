"use client";
import Image from "next/image";
import loadingSVG from "../../../../public/loading-transparent.svg";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import Error503 from "@/components/page/error/Error503";
import Offline from "@/components/page/error/Offline";
import { useEffect, useState } from "react";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { unstable_noStore as noStore } from "next/cache";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapSection from "@/components/page/map/MapSection";
import DetailPopUpMobile from "@/components/page/map/detail-popup/DetailPopUpMobile";
const Map = dynamic(() => import("@/components/page/map/MapSection"), {
  loading: () => (
    <section className="h-screen w-screen flex items-center justify-center bg-gray-500">
      <Image
        src={loadingSVG}
        alt="Loading..."
        className="h-50 w-auto"
        priority
      />
    </section>
  ),
});
export default function page() {
  const api_key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");
  const [place_details, setPlaceDetails] = useState<PlaceDetailsType[]>();
  const [map_center, setMapCenter] = useState<LatLngLiteral>();
  const [user_location, setUserLocation] = useState<LatLngLiteral>();

  const router = useRouter();
  const search_param = useSearchParams();
  const error = search_param.get("error");

  async function getNearbyPlaces() {
    noStore();
    try {
      const api_response = await fetch(
        `/api/nearby-places?lat=${map_center?.lat}&lng=${map_center?.lng}`,
        { cache: "no-store" }
      );
      const { data } = await api_response.json();

      setPlaceDetails(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (!navigator.onLine) router.push(`/?error=offline`);

    if (!navigator.geolocation.getCurrentPosition) {
      throw new Error("Location detector is not supported in your browser");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter({ lat: latitude, lng: longitude });
      },
      (error) => {
        throw error;
      }
    );
    const watch_id = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        throw error;
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watch_id);
    };
  }, []);

  useEffect(() => {
    if (map_center?.lat !== undefined && map_center.lng !== undefined) {
      getNearbyPlaces();
    }
  }, [map_center]);

  if (error === "overload") return <Error503 />;
  if (error === "offline") return <Offline />;
  return (
    <main>
      <section className="h-screen w-screen">
        <APIProvider apiKey={api_key}>
          <MapSection
            map_center={map_center!}
            user_location={user_location!}
            data={place_details!}
          />
        </APIProvider>
      </section>
      <DetailPopUpMobile data={place_details!} />
    </main>
  );
}
