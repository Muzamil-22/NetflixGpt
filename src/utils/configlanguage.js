import { createSlice } from "@reduxjs/toolkit";

const configlanguage = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configlanguage.actions;
export default configlanguage.reducer;
