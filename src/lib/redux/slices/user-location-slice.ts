import { UserLocation } from "@/lib/types/google-map-type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserLocation = {
  coordinates: {
    lat: 8.240031061839161,
    lng: 124.24471135081795,
  },
};

export const userLocation = createSlice({
  name: "Userlocation",
  initialState,
  reducers: {
    setLocation: (_, action: PayloadAction<UserLocation>) => {
      return action.payload;
    },
  },
});

export const { setLocation } = userLocation.actions;
export default userLocation.reducer;
