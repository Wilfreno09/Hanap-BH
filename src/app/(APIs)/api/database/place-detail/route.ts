import dbConnect from "@/lib/database/connect";
import PlaceDetail from "@/lib/database/model/Place-detail";
import getDistance from "@/lib/google-api/distance";
import { PhotosType } from "@/lib/types/google-place-api/photos-type";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!api_key) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY is missing");
  try {
    const { place_id, user_location } = await request.json();
    await dbConnect();
    const database_data = await PlaceDetail.findOne({ place_id });

    if (database_data) {
      const distance = getDistance(database_data.location, user_location);
      database_data.distance = distance;
      return NextResponse.json({ data: database_data }, { status: 200 });
    }

    const place_detail = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${api_key}&place_id=${place_id}`
    );

    const { result } = await place_detail.json();

    const {
      geometry: { location },
      name,
      photos,
      vicinity,
      rating,
    } = result;

    const distance = getDistance(location, user_location);
    const photo_detail: PhotosType[] = photos.map(
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

    const data: PlaceDetailType = {
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
      rating,
      contact: {
        social_media: {
          facebook: "",
          twitter: "",
          instagram: "",
        },
        phone_number: [],
      },
      distance,
      database: "GOOGLE",
    };

    return NextResponse.json({ result: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
