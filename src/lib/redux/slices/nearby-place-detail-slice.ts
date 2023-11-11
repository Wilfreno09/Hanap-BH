import { PlaceDetailsType } from "@/lib/types/place-detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: PlaceDetailsType[] = [
  {
    owner: "",
    place_id: "",
    name: "",
    location: {
      vicinity: "",
      province: "",
      town: {
        city: "",
        municipality: "",
      },
      barangay: "",
      street: "",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    photos: [],
    price: {
      max: 0,
      min: 0,
    },
    rooms: 0,
    rating: {
      count: 0,

      average: 0,
    },
    distance: 0,
  },
];

export const nearby_place_detail = createSlice({
  name: "nearbyPlaceDetails",
  initialState,
  reducers: {
    setNearbyPlaceDetails: (_, action: PayloadAction<PlaceDetailsType[]>) => {
      return action.payload;
    },
  },
});

export const { setNearbyPlaceDetails } = nearby_place_detail.actions;
export default nearby_place_detail.reducer;
