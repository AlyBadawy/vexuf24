import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UIState = {
  isDarkMode: boolean;
};

const initialState: UIState = {
  isDarkMode: true, //dark mode is the default
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },

    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
