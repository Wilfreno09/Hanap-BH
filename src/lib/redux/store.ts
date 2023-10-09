import { configureStore } from "@reduxjs/toolkit";
import user_location_reducer from "./slices/user-location-slice";
import autocomplete_detail_reducer from "./slices/map-auto-complete-slice.";
import selected_detail_reducer from "./slices/selected-detail-slice";
import map_center_reducer from "./slices/map-center-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import nearby_places_details from "./slices/nearby-place-detail-slice";
export const store = configureStore({
  reducer: {
    user_location_reducer,
    autocomplete_detail_reducer,
    selected_detail_reducer,
    map_center_reducer,
    nearby_places_details,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
