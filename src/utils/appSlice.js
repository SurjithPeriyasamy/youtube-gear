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
    closeUserForm: (state) => {
      state.isUserFormOpen = false;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  toggleUserForm,
  closeUserForm,
} = appSlice.actions;
export default appSlice.reducer;
