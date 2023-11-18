import quickSort from "@/lib/google-api/sort";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import noIMG from "../../../../../public/image-square-xmark-svgrepo-com.svg";
import { PlaceDetailsType } from "@/lib/types/place-detail";
export default function NearbyPlacesListMain({
  data,
}: {
  data: PlaceDetailsType[];
}) {
  if (data && data.length > 0) {
    return (
      <>
        {quickSort(data)?.map((details) => (
          <div
            className="rounded-lg shadow-lg flex flex-col justify-between my-5"
            key={details.place_id}
          >
            <div className="aspect-video h-40 w-auto rounded-lg cursor-pointe flex items-center justify-center sm:h-[12] lg:h-[15rem] hover:rounded-lg hover:scale-105 transform transition duration-300 ease-out">
              <Image
                src={noIMG}
                alt="No Image"
                className="object-contain h-20 w-auto"
              />
            </div>
            <div className="flex flex-col space-y-1 px-2">
              <strong className=" text-gray-900 text-lg">{details.name}</strong>
              <p className="text-gray-700 text-sm">
                {details.location.vicinity}
              </p>
            </div>
            <div className="flex items-center justify-between px-2 font-semibold text-gray-900">
              <p className="text-md font-semibold">
                <strong>{details.distance?.toFixed(2)}</strong> Km away
              </p>
              <div className="flex items-center space-x-1 p-3">
                <p>{details.rating.average}</p>
                <StarIcon className="h-3 text-gray-800" />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
