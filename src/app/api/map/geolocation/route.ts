import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;
    const result = await fetch(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}`,
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
      }
    );
    const {location} = await result.json();

    console.log("STATUS:",  result.statusText);
    return NextResponse.json(location, { status: 200 });
  } catch (err) {
    return NextResponse.json({err}, { status: 500 });
  }
}
