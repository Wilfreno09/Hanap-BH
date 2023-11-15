import { LatLngLiteral } from "../types/google-maps-api-type";
import { unstable_noStore as noStore } from "next/cache";
export async function GetNearbyPlaces(user_location: LatLngLiteral) {
  noStore();
  try {
    const api_response = await fetch(
      `/api/nearby-places?lat=${user_location.lat}&lng=${user_location.lng}`
    );
    const api_data = await api_response.json();
    console.log("APi data: ", api_data);
    return {
      data: api_data.data,
      next_page_token: api_data.next_page_token,
    };
  } catch (error) {
    throw error;
  }
}
