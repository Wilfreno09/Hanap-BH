import { NextResponse } from "next/server";

cccccccccccccccccccccccccccccosnt
export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?key`
  );
}

export async function POST(request: Request) {
  try {
    const response = fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key`
    );

    
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
