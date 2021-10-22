import { createSlice } from "@reduxjs/toolkit";

export const iconSlice = createSlice({
  name: "icons",
  initialState: {},
  reducers: {
    loadIcons: (state: any & { icons: any }, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadIcons } = iconSlice.actions;

export default iconSlice.reducer;
