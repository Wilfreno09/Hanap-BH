import { StarIcon } from "@heroicons/react/24/solid";
import { PlaceDetailsType } from "@/lib/types/place-detail";

export default function BestOfferSection({
  data,
}: {
  data: PlaceDetailsType[];
}) {
  return (
    data[0].place_id !== "" && (
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly cursor-pointer">
        {data?.map((details: PlaceDetailsType) => (
          <div
            className="flex flex-col my-5 mx-1 shadow-lg w-full rounded-lg space-y-5 sm:w-60 md:w-80 md:my-5 hover:scale-105 transform transition duration-300 ease-out"
            key={details.place_id}
          >
            <div className="aspect-square h-auto w-full rounded-lg bg-gray-900 "></div>
            <div className="flex flex-col space-y-1 p-3 ">
              <strong className="text-xl text-gray-900">
                {details.name.length > 30
                  ? `${details.name.slice(0, 30)}...`
                  : details.name}
              </strong>
              <p className="text-md text-gray-700 truncate whitespace-pre-line">
                {details.location.vicinity.length > 30
                  ? `${details.location.vicinity.slice(0, 30)}...`
                  : details.location.vicinity}
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
