import dbConnect from "@/lib/database/connect";
import PlaceDetail from "@/lib/database/model/Place-detail";
import { savePlace } from "@/lib/database/save-place";
import { getReverseGeocode } from "@/lib/google-api/geocode";
import { NearbyPlaceType } from "@/lib/types/google-place-api/nearby-place";
import { PhotosType } from "@/lib/types/google-place-api/photos";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY missing");

  try {
    const { lat, lng } = await request.json();
    const { municiplality } = await getReverseGeocode({ lat, lng });

    await dbConnect();

    const mongo_DB_data = await PlaceDetail.find({
      location: {
        municiplality,
      },
    });

    if (mongo_DB_data.length > 0)
      return NextResponse.json({ data: mongo_DB_data }, { status: 200 });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${api_key}&type=lodging&location=${lat}%2C${lng}&radius=50000`
    );

    const { results } = await response.json();

    const google_response = results.map((result: NearbyPlaceType) => {
      const {
        place_id,
        name,
        geometry: { location },
        photos,
        vicinity,
        rating,
      } = result;
      
      const photo_detail = photos?.map(
        (photo: { height: number; width: number; photo_reference: string }) => {
          const { height, width, photo_reference } = photo;
          return {
            reference: place_id,
            height,
            width,
            photo_url: photo_reference,
          } as PhotosType;
        }
      );

      const detail = {
        owner: undefined,
        place_id,
        name,
        location: {
          vicinity,
          province: "",
          municipality: "",
          barangay: "",
          street: "",
          coordinates: location,
        },
        photos: photo_detail,
        price: {
          max: undefined,
          min: undefined,
        },
        rooms: undefined,
        contact: {
          social_media: {
            facebook: "",
            twitter: "",
            instagram: "",
          },
          phone_number: [],
        },
        rating,
        database: "GOOGLE",
      };

      return detail;
    });

    return NextResponse.json({ data: google_response }, { status: 200 });
  } catch (err) {
    console.log("nearby-places api error");
    console.log("error: ", err);
    return NextResponse.json({ ERROR: err }, { status: 500 });
  }
}
