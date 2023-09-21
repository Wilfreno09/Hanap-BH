import mongoose from "mongoose";
import PlaceDetail from "./model/Place-detail";
import Rating from "./model/Rating";
import { getReverseGeocode } from "../google-api/geocode";
import Photos from "./model/Photos";
import dbConnect from "./connect";
import { PlaceDetailType } from "../types/google-place-api/place-detail";
import { PhotosType } from "../types/google-place-api/photos";

export async function savePlace(data: PlaceDetailType, photos: PhotosType[]) {
  try {
    const {
      owner,
      place_id,
      name,
      location,
      price,
      rooms,
      rating,
      contact,
      database,
    } = data;
    await dbConnect();

    if (await alreadyExist(place_id)) return;

    const { municipality } = await getReverseGeocode(location.coordinates);

    const placeRating = new Rating({
      place_id,
      rating_value: rating,
    });

    await placeRating.save();

    const place_detail = new PlaceDetail({
      owner,
      place_id,
      name,
      location: {
        vicinity: location.vicinity,
        municipality,
        coordinates: location.coordinates,
      },
      price,
      rooms,
      rating,
      contact,
      database,
    });

    await place_detail.save();

    photos.forEach(async (photo) => {
      const { reference, height, width, photo_url } = photo;

      const photo_detail = new Photos({
        CSSVariableReferenceValue,
        height,
        width,
        photo_url,
      });
      await photo_detail.save();
    });
  } catch (err) {
    throw err;
  }
}

export async function alreadyExist(id: string) {
  try {
    const place = await PlaceDetail.findOne({ place_id: id });
    if (place !== null) return true;
    return false;
  } catch (error) {
    throw error;
  }
}
