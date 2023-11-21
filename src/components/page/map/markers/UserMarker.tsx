// import "@/components/Dashboard/map/markers/InfoWindow.css";

import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
export default function UserMarker({
  user_location,
}: {
  user_location: LatLngLiteral;
}) {
  const map = useMap();
  return (
    <AdvancedMarker
      position={{ lat: user_location.lat, lng: user_location.lng }}
    >
      <section className="flex flex-col items-center justify-center text-gray-900 animate-bounce cursor-pointer">
        <p className="text-lg">You are here</p>
        <ChevronDoubleDownIcon className="h-5 cursor-pointer" />
      </section>
    </AdvancedMarker>
  );
}
