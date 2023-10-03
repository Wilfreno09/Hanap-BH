import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.get("search");
  console.log("params: ", params);
  try {
    return NextResponse.json(null, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
