import savePlace from "@/lib/google-api/save-place";
import { PlaceDetailType } from "@/lib/types/places-detail-types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  try {
    const { lat, lng } = await request.json();

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&type=lodging&location=${lat}%2C${lng}&radius=40000`
    );
    const { results }: { results: PlaceDetailType[] } = await response.json();

    savePlace(results);

    return NextResponse.json(
      {
        results,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ ERROR: err }, { status: 500 });
  }
}
