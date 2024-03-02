import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from 'react-redux';
import { middlewares } from './middlewares';
import { setupListeners } from '@reduxjs/toolkit/query';

export const rootReducer = combineReducers({});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
  });

export const store = setupStore();

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
