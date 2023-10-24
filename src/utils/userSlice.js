import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loginUser: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.loginUser = action.payload;
    },
    removeUser: (state, action) => {
      state.loginUser = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
