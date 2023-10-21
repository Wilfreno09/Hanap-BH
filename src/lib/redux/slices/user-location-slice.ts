import { UserLocationType } from "@/lib/types/user-detail-type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: UserLocationType = {
  coordinates: {
    lat: undefined,
    lng: undefined,
  },
};

export const user_location = createSlice({
  name: "Userlocation",
  initialState,
  reducers: {
    setUserLocation: (_, action: PayloadAction<UserLocationType>) => {
      return action.payload;
    },
  },
});

export const { setUserLocation } = user_location.actions;
export default user_location.reducer;
