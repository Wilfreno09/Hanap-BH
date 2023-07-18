import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&keyword=boarding house&location=8.23976433774994%2C124.24476856021924&radius=1000`
    );

    const { geometry, name, place_id, vicinity, photos } =
      await response.json();
    const { location } = geometry;
    const { height, width, photo_reference } = photos;
    return NextResponse.json(
      {
        place_id,
        name,
        location,
        vicinity,
        photo: { width, photo_reference },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
