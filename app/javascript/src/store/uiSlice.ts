import { Layout, LayoutSize } from '@/types/Layout';
import { Roles } from '@/types/Role';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UIState = {
  isDarkMode: boolean;
  currentRole?: Roles;
  layOut: Layout;
  currentModule?: string;
};

const initialState: UIState = {
  isDarkMode: true, //dark mode is the default
  currentRole: undefined,
  currentModule: 'dashboard',
  layOut: {
    [Roles.Admin]: [3, 72, 25],
    [Roles.Therapist]: [3, 72, 25],
    [Roles.Patient]: [3, 72, 25],
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },

    setLayOut: (state, action: PayloadAction<LayoutSize>) => {
      const currentRole = state.currentRole;
      if (currentRole === undefined) return;

      state.layOut[currentRole] = action.payload;
    },

    setCurrentRole: (state, action: PayloadAction<Roles>) => {
      state.currentRole = action.payload;
    },

    unSetCurrentRole: (state, _action: PayloadAction<void>) => {
      state.currentRole = undefined;
    },

    setCurrentModule: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload;
    },
  },
});

export const {
  setDarkMode,
  setCurrentRole,
  unSetCurrentRole,
  setLayOut,
  setCurrentModule,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
