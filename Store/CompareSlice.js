import { createSlice } from "@reduxjs/toolkit";

const CompareSlice = createSlice({
  name: "CompareSlice",
  initialState: { count: 2 },
  reducers: {
    addHotels(state, action) {
      state.count += action.payload;
    },
    removeHotels(state, action) {
      if (state.count > 0) {
        state.count -= action.payload;
      } else {
        return;
      }
    },
  },
});

export const compareActions = CompareSlice.actions;
export default CompareSlice;
