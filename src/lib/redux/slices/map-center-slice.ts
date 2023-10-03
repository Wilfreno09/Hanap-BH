import { UserLocationType } from "@/lib/types/redux-slice-types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserLocationType = {
  coordinates: {
    lat: undefined,
    lng: undefined,
  },
};

export const map_center = createSlice({
  name: "MapCenter",
  initialState,
  reducers: {
    setMapCenter: (_, action: PayloadAction<UserLocationType>) => {
      return action.payload;
    },
  },
});

export const { setMapCenter } = map_center.actions;
export default map_center.reducer;
