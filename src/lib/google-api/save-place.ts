import dbConnect from "../database/connect";
import PlacesDetail from "../database/model/Places-detail";
import { PlaceDetailType } from "../types/places-detail-types";

export default async function savePlace(datas: PlaceDetailType[]) {
  try {
    await dbConnect();

    datas.forEach(async (data: PlaceDetailType) => {
      try {
        const isDuplicate = await findDuplicate(data.place_id);

        if (!isDuplicate) {
          if (!data.photos || data.photos.length <= 0) {
            const newPlace = new PlacesDetail<PlaceDetailType>({
              place_id: data.place_id,
              vicinity: data.vicinity,
              location: {
                coordinate: {
                  lat: data.geometry?.location.lat as number,
                  lng: data.geometry?.location.lng as number,
                },
              },
              name: data.name,
              new: false,
            });

            await newPlace.save();
          }
          const newPlace = new PlacesDetail<PlaceDetailType>({
            place_id: data.place_id,
            vicinity: data.vicinity,
            location: {
              coordinate: {
                lat: data.geometry?.location.lat as number,
                lng: data.geometry?.location.lng as number,
              },
            },
            name: data.name,
            photos: [
              {
                height: data.photos?.[0].height as number,
                width: data.photos?.[0].width as number,
                photo_reference: data.photos?.[0].photo_reference as string,
              },
            ],
            new: false,
          });
          await newPlace.save();
        }
      } catch (error) {
        throw error;
      }
    });
  } catch (err) {
    throw err;
  }
}

async function findDuplicate(data: string) {
  const result = await PlacesDetail.find({ place_id: data });
  if (!result || result.length <= 0) return false;

  return true;
}
