import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const redirect_route = createSlice({
  name: "redirectRoute",
  initialState: {
    route: "",
  },
  reducers: {
    setRedirectRouter: (_, action) => {
      return action.payload;
    },
  },
});

export const { setRedirectRouter } = redirect_route.actions;
export default redirect_route.reducer;
