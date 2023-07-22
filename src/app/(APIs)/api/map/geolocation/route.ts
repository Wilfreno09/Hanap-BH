import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
    const result = await fetch(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store"
      }
    );
    const { location } = await result.json();
    return NextResponse.json(location, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
