import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { place_id: string } }
) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY;
  if (!apiKey)
    throw new Error(" NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY missing ");

  try {
    const { place_id } = params;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=${apiKey}`
    );

    const { results } = await response.json();

    return NextResponse.json(
      {
        location: results[0].geometry.location,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
