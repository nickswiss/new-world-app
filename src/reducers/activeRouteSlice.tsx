import { createSlice } from "@reduxjs/toolkit";

export const activeRouteSlice = createSlice({
  name: "activeRoute",
  initialState: {},
  reducers: {
    loadActiveRoute: (state: any & { activeRoute: any }, action) => {
      console.log("action");
      console.log(action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadActiveRoute } = activeRouteSlice.actions;

export default activeRouteSlice.reducer;
