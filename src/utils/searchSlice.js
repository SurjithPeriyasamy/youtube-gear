import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      //LRU - Least Recently Used Cache
      // const keys = Object.keys(state.results);
      state.results = { ...state.results, ...action.payload };
      // keys.length > 5 && delete state.results[keys[0]];
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
