import dbConnect from "@/lib/database/connect";
import PlacesDetail from "@/lib/database/model/Places-detail";
import { PlaceDetailType } from "@/lib/types/places-detail-types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY missing");

  try {
    const { lat, lng } = await request.json();

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&keyword=boarding house&location=${lat}%2C${lng}&radius=40000`
    );
    const { results }: { results: PlaceDetailType[] } = await response.json();

    savePlace(results);

    return NextResponse.json(
      {
        results,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ ERROR: err }, { status: 500 });
  }
}

async function savePlace(datas: PlaceDetailType[]) {
  try {
    await dbConnect();

    datas.forEach(async (data: PlaceDetailType) => {
      try {
        const isDuplicate = await findDuplicate(data.place_id);
        if (!isDuplicate) {
          const newPlace = new PlacesDetail<PlaceDetailType>({
            place_id: data.place_id,
            vicinity: data.vicinity,
            location: {
              coordinate: {
                lat: data.location.coordinate.lat,
                lng: data.location.coordinate.lng,
              },
            },
            name: data.name,
            photos: [
              {
                height: data.photos[0].height,
                width: data.photos[0].width,
                photo_reference: data.photos[0].photo_reference,
              },
            ],
          });
          await newPlace.save();
        }
      } catch (error) {
        return NextResponse.json(
          { "error-data": data, error },
          { status: 500 }
        );
      }
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

async function findDuplicate(data: string) {
  const result = await PlacesDetail.find({ place_id: data });
  if (!result || result.length <= 0) return false;
  return true;
}
