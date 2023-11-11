import { PlaceDetailType } from "@/lib/types/place-detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: PlaceDetailType = {
  place_id: "",
  name: "",
  location: {
    vicinity: "",
    province: "",
    municipality: "",
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
  rating: 0,
  contact: {
    social_media: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
    phone_number: [],
  },
  distance: 0,
  database: "",
};

export const selected_detail = createSlice({
  name: "selectedDetail",
  initialState,
  reducers: {
    setSelectedDetail: (_, action: PayloadAction<PlaceDetailType>) => {
      return action.payload;
    },
  },
});

export const { setSelectedDetail } = selected_detail.actions;
export default selected_detail.reducer;
