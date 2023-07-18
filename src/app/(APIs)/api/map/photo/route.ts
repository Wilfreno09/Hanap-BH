import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");
  try {
    const { photo_reference, maxwidth } = await request.json();

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photo_reference=${photo_reference}&maxwidth=${maxwidth}`
    );

    return NextResponse.json({ img: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
