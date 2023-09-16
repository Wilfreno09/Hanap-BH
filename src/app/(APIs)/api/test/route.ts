import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.json(null, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
