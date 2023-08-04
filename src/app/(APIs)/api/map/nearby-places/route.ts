import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  try {
    const { lat, lng } = await request.json();

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&keyword=boarding house&location=${lat}%2C${lng}&radius=20000`
    );

    const data = await response.json();

    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ ERROR: err }, { status: 500 });
  }
}
