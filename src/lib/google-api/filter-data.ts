import {
  NominatimReverseAPiResponse,
  PlaceDetailsType,
  PlacesAPIResponseDetails,
} from "../types/place-detail";

export default function fiterData(
  details: PlacesAPIResponseDetails,
  nominatim_data?: NominatimReverseAPiResponse
) {
  const photo_details = details.photos?.map((photo) => {
    return {
      photo_url: photo.photo_reference,
    };
  });
  const new_data = <PlaceDetailsType>{
    owner: "",
    place_id: details.place_id,
    name: details.name,
    photos: photo_details,
    location: {
      vicinity: details.vicinity,
      province: "",
      town: {
        city: nominatim_data?.address.city || "",
        municipality: nominatim_data?.address.town || "",
      },
      barangay: "",
      street: "",
      coordinates: {
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
      },
    },
    price: {
      max: undefined,
      min: undefined,
    },
    rating: {
      count: details.user_ratings_total,
      average: details.rating,
    },
    date_created: undefined,
  };

  return new_data;
}
