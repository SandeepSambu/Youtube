import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    isOpenMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    menuCollapse: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { isOpenMenu, menuCollapse } = navSlice.actions;

export default navSlice.reducer;
