import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "",
  difficulty: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setSearchTerm, setCategory, setDifficulty } =
  filterSlice.actions;
export default filterSlice.reducer;
