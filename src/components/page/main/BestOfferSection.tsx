import { StarIcon } from "@heroicons/react/24/solid";
import BestOfferLoadingSkeleton from "./BestOfferLoadingSkeleton";
import { PlaceDetailsType } from "@/lib/types/place-detail";

export default async function BestOfferSection({
  data,
}: {
  data: PlaceDetailsType[];
}) {
  return (
    data[0].place_id !== "" && (
      <div className="flex flex-col space-y-10 sm:flex-row sm:flex-wrap sm:justify-evenly">
        {data?.map((details: PlaceDetailsType) => (
          <div
            className="flex flex-col shadow-lg rounded-lg space-y-5"
            key={details.place_id}
          >
            <div className="aspect-square h-auto w-full rounded-lg bg-gray-900 sm:h-80 sm:w-auto"></div>
            <div className="flex flex-col space-y-1 p-3 sm:truncate">
              <strong className="text-xl text-gray-900">{details.name}</strong>
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
    )
  );
}
