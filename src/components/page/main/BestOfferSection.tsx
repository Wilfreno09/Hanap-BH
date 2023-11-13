"use client";

import { useAppSelector } from "@/lib/redux/store";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import { StarIcon } from "@heroicons/react/24/solid";
import BestOfferLoadingSkeleton from "./BestOfferLoadingSkeleton";

export default function BestOfferSection({
  nearby_places,
  next_page_token,
}: {
  nearby_places: PlaceDetailsType[];
  next_page_token: string;
}) {
  return (
    <section className="flex flex-col space-y-10  ">
      <h1 className="text-2xl font-semibold">Best Offers Nearby</h1>
      {nearby_places[0].name !== "" ? (
        <div className="flex flex-col space-y-10">
          {nearby_places?.map((details) => (
            <div
              className="flex flex-col shadow-lg rounded-lg space-y-5"
              key={details.place_id}
            >
              <span className="aspect-square h-auto w-full rounded-lg bg-gray-900 sm:h-80"></span>
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
      ) : (
        <BestOfferLoadingSkeleton />
      )}
    </section>
  );
}
