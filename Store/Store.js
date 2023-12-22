import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import CompareSlice from "./CompareSlice";

const store = configureStore({
    reducer:{ui:uiSlice.reducer,compare:CompareSlice.reducer}
})

export default store;