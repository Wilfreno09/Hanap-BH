import { UserLocation } from "@/lib/types/Props";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserLocation = {
  location: {
    lat: 8.240031061839161,
    lng: 124.24471135081795,
  },
};

export const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (_, action: PayloadAction<UserLocation>) => {
      return {
        location: {
          lat: action.payload.location.lat,
          lng: action.payload.location.lng,
        },
      };
    },
  },
});

export const { setLocation } = location.actions;
export default location.reducer;
