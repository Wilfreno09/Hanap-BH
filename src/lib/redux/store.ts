import { configureStore } from "@reduxjs/toolkit";
import userLocationReducer from "./slices/user-location-slice";
import mapLoaderStateReducer from "./slices/map-is-loaded-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { userLocationReducer, mapLoaderStateReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
