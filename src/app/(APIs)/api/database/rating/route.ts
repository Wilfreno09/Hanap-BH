// const ratings = await Rating.find({ place_id });

import { NextResponse } from "next/server";

// const ratingValues: number[] = ratings.map((rating) => {
//   return rating.rating_value;
// });

// let sum: number = 0;

// for (let i = 0; i < ratingValues.length; i++) {
//   sum += ratingValues[i];
// }

export async function GET(request: Request) {
  return NextResponse.json({ msg: "success" }, { status: 200 });
}
