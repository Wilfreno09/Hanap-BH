import { LatLngLiteral } from "@/lib/types/google-map-type";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { request: {place_id: string } };
}) {
    
  const {
    place_id,
  } = params.request;
   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");


  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=${apiKey}`
    );

    return NextResponse.json(response, {status: 200})
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
