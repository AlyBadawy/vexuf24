import { LayOut, LayoutSize, UIState } from '@/types/Layout';
import { Modules } from '@/types/Modules';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UIState = {
  isDarkMode: true, //dark mode is the default
  currentModule: Modules.Dashboard,
  layOutSizes: [3, 72, 25],
  layout: LayOut.DEFAULT,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },

    setLayOutSizes: (state, action: PayloadAction<LayoutSize>) => {
      state.layOutSizes = action.payload;
    },

    setCurrentModule: (state, action: PayloadAction<Modules>) => {
      state.currentModule = action.payload;
    },

    setLayout: (state, action: PayloadAction<LayOut>) => {
      state.layout = action.payload;
    },
  },
});

export const { setDarkMode, setLayOutSizes, setCurrentModule } =
  uiSlice.actions;
export const uiReducer = uiSlice.reducer;
