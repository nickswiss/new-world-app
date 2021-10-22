import { createSlice } from "@reduxjs/toolkit";

export const farmingRouteSlice = createSlice({
  name: "farmingRoutes",
  initialState: [],
  reducers: {
    loadFarmingRoutes: (state: any & { farmingRoutes: any }, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFarmingRoutes } = farmingRouteSlice.actions;

export default farmingRouteSlice.reducer;
