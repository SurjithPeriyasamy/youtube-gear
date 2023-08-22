import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isUserFormOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    toggleUserForm: (state) => {
      state.isUserFormOpen = !state.isUserFormOpen;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, toggleUserForm } =
  appSlice.actions;
export default appSlice.reducer;
