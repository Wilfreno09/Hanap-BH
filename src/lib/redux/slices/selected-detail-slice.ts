import { PlaceDetailsType } from "@/lib/types/place-detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: PlaceDetailsType = {
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
};

export const selected_detail = createSlice({
  name: "selectedDetail",
  initialState,
  reducers: {
    setSelectedDetail: (_, action: PayloadAction<PlaceDetailsType>) => {
      return action.payload;
    },
  },
});

export const { setSelectedDetail } = selected_detail.actions;
export default selected_detail.reducer;
