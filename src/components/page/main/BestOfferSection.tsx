import { StarIcon } from "@heroicons/react/24/solid";
import BestOfferLoadingSkeleton from "./BestOfferLoadingSkeleton";
import { LatLngLiteral } from "@/lib/types/google-maps-api-type";
import { GetNearbyPlaces } from "@/lib/server-action/GetNearbyPlaces";
import { PlaceDetailsType } from "@/lib/types/place-detail";

export default async function BestOfferSection({
  user_location,
}: {
  user_location: LatLngLiteral;
}) {
  if (user_location.lat !== undefined) {
    const { data, next_page_token } = await GetNearbyPlaces({
      lat: user_location.lat,
      lng: user_location.lng,
    });
    console.log(JSON.stringify(data));
    return (
      data !== undefined && (
        <section className="flex flex-col space-y-10  ">
          <h1 className="text-2xl font-semibold">Best Offers Nearby</h1>
          {data[0]?.name !== "" ? (
            <div className="flex flex-col space-y-10">
              {data?.map((details: PlaceDetailsType) => (
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
      )
    );
  }
}
