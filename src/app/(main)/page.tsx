"use client";
export const dynamic = "force-dynamic";
import Error503 from "@/components/page/error/Error503";
import Offline from "@/components/page/error/Offline";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GetUserLocation from "@/components/page/GetUserLocation";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import NearbySection from "@/components/page/main/nearby-places/NearbySection";
import BestOfferSection from "@/components/page/main/best-offer/BestOfferSection";

export default function page() {
  const [location, setLocation] = useState<LatLngLiteral>();
  const [place_details, setPlaceDetails] = useState<PlaceDetailsType[]>();
  const [next_page_token, setToken] = useState("");
  const search_params = useSearchParams();
  const router = useRouter();
  const error = search_params.get("error");

  async function getNearbyPlaces() {
    try {
      const api_response = await fetch(
        `/api/nearby-places?lat=${location?.lat}&lng=${location?.lng}`,
        { cache: "no-store" }
      );
      const { data, next_page_token } = await api_response.json();

      setPlaceDetails(data);
      setToken(next_page_token);
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
        setLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        throw error;
      }
    );
  }, []);
  useEffect(() => {
    if (location?.lat !== undefined && location.lng !== undefined) {
      getNearbyPlaces();
    }
  }, [location]);
  console.log(place_details);
  if (error === "overload") return <Error503 />;
  if (error === "offline") return <Offline />;

  return (
    <GetUserLocation>
      <main className="dark:text-white mb-20 mt-[10vh] space-y-5 md:mb-0">
        <NearbySection data={place_details!} />
        <BestOfferSection token={next_page_token} data={place_details!} />
      </main>
    </GetUserLocation>
  );
}
