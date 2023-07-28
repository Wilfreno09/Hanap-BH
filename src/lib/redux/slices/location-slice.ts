import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const location = createSlice({
  name: "location",
  initialState: {},
  reducers: {
    setLocation: (_, action: PayloadAction<object>) => {
      return {
        location:{
            action.payload,
        }
      };
    },
  },
});

export const { setLocation } = location.actions;
export default location.reducer;
