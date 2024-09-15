import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleSearch: false,
    gptMovies: null,
    tmdbMovies: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addMovieSearchResults: (state, action) => {
      const { gptMovies, tmdbMovies } = action.payload;
      state.gptMovies = gptMovies;
      state.tmdbMovies = tmdbMovies;
    },
  },
});

export const { toggleGptSearch, addMovieSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
