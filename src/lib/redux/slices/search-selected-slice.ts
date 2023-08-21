import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "",
};

export const searchSelected = createSlice({
  name: "searchSelected",
  initialState,
  reducers: {
    setSearchSelected: (_, action: PayloadAction<string>) => {
      return { selected: action.payload };
    },
  },
});

export const { setSearchSelected } = searchSelected.actions;
export default searchSelected.reducer;
