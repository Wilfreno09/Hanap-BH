import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Token = {
  next_page_token?: string;
};
const initialState: Token = {
  next_page_token: "",
};

export const next_page_token = createSlice({
  name: "nextPageToken",
  initialState,
  reducers: {
    setNextPageToken: (_, action: PayloadAction<string>) => {
      return {
        next_page_token: action.payload,
      };
    },
  },
});

export const { setNextPageToken } = next_page_token.actions;
export default next_page_token.reducer;
