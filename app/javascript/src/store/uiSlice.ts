import { Roles } from '@/types/Role';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UIState = {
  isDarkMode: boolean;
  currentRole?: Roles;
  isSideBarCollapsed: boolean;
  layOutSizes: number[];
};

const initialState: UIState = {
  isDarkMode: true, //dark mode is the default
  currentRole: undefined,
  isSideBarCollapsed: false,
  layOutSizes: [10, 30, 60],
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

    setSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideBarCollapsed = action.payload;
    },

    setLayOutSizes: (state, action: PayloadAction<number[]>) => {
      state.layOutSizes = action.payload;
    },

    setCurrentRole: (state, action: PayloadAction<Roles>) => {
      state.currentRole = action.payload;
    },

    unSetCurrentRole: (state, _action: PayloadAction<void>) => {
      state.currentRole = undefined;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  setCurrentRole,
  unSetCurrentRole,
  setSideBarCollapsed,
  setLayOutSizes,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
