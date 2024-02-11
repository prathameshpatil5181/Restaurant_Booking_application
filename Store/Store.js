import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import CompareSlice from "./CompareSlice";
import AuthSlice from "./AuthSlice";
import ModelSlice from "./ModelSlice";
import BookingSlice from "./BookingSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    compare: CompareSlice.reducer,
    auth: AuthSlice.reducer,
    model:ModelSlice.reducer,
    book:BookingSlice.reducer
  },
});

export default store;
