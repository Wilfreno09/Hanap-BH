import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapLaodState: false,
};

export const mapIsLoaded = createSlice({
  name: "mapIsLoaded",
  initialState,
  reducers: {
    setMapIsLoaded: (_, action: PayloadAction<boolean>) => {
      return { mapLaodState: action.payload };
    },
  },
});

export const { setMapIsLoaded } = mapIsLoaded.actions;
export default mapIsLoaded.reducer;
