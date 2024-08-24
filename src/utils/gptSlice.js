import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
