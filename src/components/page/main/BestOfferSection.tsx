"use client";

import { useAppSelector } from "@/lib/redux/store";
import { StarIcon } from "@heroicons/react/24/solid";

export default function BestOfferSection() {
  const nearby_places = useAppSelector(
    (state) => state.nearby_places_details_reducer
  );
  return (
    <section className="flex flex-col space-y-10  ">
      <h1 className="text-2xl font-semibold">Best Offers Nearby</h1>
      {nearby_places.length > 0 && (
        <div className="flex flex-col space-y-10">
          {nearby_places?.map((details) => (
            <div
              className="flex flex-col shadow-lg rounded-lg space-y-5"
              key={details.place_id}
            >
              <span className="aspect-square h-auto w-full rounded-lg bg-gray-900 hover:scale-105 sm:h-80"></span>
              <div className="flex flex-col space-y-1 p-3">
                <strong className="text-xl text-gray-900">
                  {details.name}
                </strong>
                <p className="text-md text-gray-700">
                  {details.location.vicinity}
                </p>
              </div>
              <div className="flex items-center justify-between font-semibold text-gray-900 p-3">
                <p>
                  <strong>{details.distance?.toFixed(2)}</strong> km Away
                </p>
                <div className="flex items-center space-x-3 ">
                  <p>{details.rating.average}</p>
                  <StarIcon className="h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
