import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

export const autoCompleteDetail = createSlice({
  name: "autoCompleteDetail",
  initialState,
  reducers: {
    setAutocompleteDetails: (_, action: PayloadAction<object>) => {
      return { details: action.payload };
    },
  },
});

export const { setAutocompleteDetails } = autoCompleteDetail.actions;
export default autoCompleteDetail.reducer;
