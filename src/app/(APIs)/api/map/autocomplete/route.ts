import PlacesDetail from "@/lib/database/model/Place-detail";
import { getGeocode } from "@/lib/google-api/geocode";
import { AutocompleteType } from "@/lib/types/google-place-api/autocomplete";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;

  if (!apiKey) throw new Error(" NEXT_PUBLIC_GOOGLE_PLACE_API_KEY missing ");

  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get("search");
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${search}&radius=50000&components=country:ph&types=lodging`
    );

    const { predictions } = await response.json();

    const data = predictions.map(async (prediction: AutocompleteType) => {
      try {
        const {
          place_id,
          description,
          structured_formatting: { secondary_text },
        } = prediction;
        return {
          place_id,
          name: description,
          location: {
            vicinity: secondary_text,
          },
        };
      } catch (error) {
        throw error;
      }
    });

    return NextResponse.json({ result: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

async function duplicate(data: string) {
  const result = await PlacesDetail.find({ place_id: data });
  if (!result || result.length <= 0) return false;

  return true;
}
