import { Roles } from '@/types/Role';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UIState = {
  isDarkMode: boolean;
  currentRole?: Roles;
};

const initialState: UIState = {
  isDarkMode: true, //dark mode is the default
  currentRole: undefined,
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

    setCurrentRole: (state, action: PayloadAction<Roles>) => {
      state.currentRole = action.payload;
    },

    unSetCurrentRole: (state, _action: PayloadAction<void>) => {
      state.currentRole = undefined;
    },
  },
});

export const { toggleDarkMode, setDarkMode, setCurrentRole, unSetCurrentRole } =
  uiSlice.actions;
export const uiReducer = uiSlice.reducer;
