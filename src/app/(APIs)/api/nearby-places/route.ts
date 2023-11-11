import dbConnect from "@/lib/database/connect";
import PlaceDetail from "@/lib/database/model/Place-detail";
import {
  NominatimReverseAPiResponse,
  PlaceDetailsType,
  PlacesAPIResponseDetails,
} from "@/lib/types/place-detail";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");

  try {
    const search_params = request.nextUrl.searchParams;
    const lat = search_params.get("lat");
    const lng = search_params.get("lng");

    const nomitatim_response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    const nominatim_data: NominatimReverseAPiResponse =
      await nomitatim_response.json();

    await dbConnect();
    let db_data;
    if (nominatim_data.address.city) {
      db_data = await PlaceDetail.find({
        "location.town.city": nominatim_data.address.city,
      });
    } else if (nominatim_data.address.town) {
      db_data = await PlaceDetail.find({
        "location.town.": nominatim_data.address.town,
      });
    }
    const filtered_DB_data = db_data?.map((detail) => detail.toJSON());
    const places_api_response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${api_key}&location=${lat}%2C${lng}&type=lodging&radius=50000`
    );

    const places_api_data = await places_api_response.json();

    const resturctured_places_api_data = places_api_data.results.map(
      (details: PlacesAPIResponseDetails) => {
        const photo_details = details.photos?.map((photo) => {
          return {
            photo_url: photo.photo_reference,
          };
        });
        try {
          const new_data = <PlaceDetailsType>{
            owner: "",
            place_id: details.place_id,
            name: details.name,
            photos: photo_details,
            location: {
              vicinity: details.vicinity,
              province: "",
              town: {
                city: nominatim_data.address.city || "",
                municipality: nominatim_data.address.town || "",
              },
              barangay: "",
              street: "",
              coordinates: {
                lat: details.geometry.location.lat,
                lng: details.geometry.location.lng,
              },
            },
            price: {
              max: undefined,
              min: undefined,
            },
            rating: {
              count: details.user_ratings_total,
              average: details.rating,
            },
            date_created: undefined,
          };
          return new_data;
        } catch (error) {
          throw error;
        }
      }
    );
    return NextResponse.json(
      { data: [...filtered_DB_data!, ...resturctured_places_api_data] },
      { status: 200 }
    );
  } catch (err) {
    console.log("error: ", err);
    return NextResponse.json({ ERROR: err }, { status: 500 });
  }
}
