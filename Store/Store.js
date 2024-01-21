import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import CompareSlice from "./CompareSlice";
import AuthSlice from "./AuthSlice";
import ModelSlice from "./ModelSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    compare: CompareSlice.reducer,
    auth: AuthSlice.reducer,
    model:ModelSlice.reducer
  },
});

export default store;
