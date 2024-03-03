import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from 'react-redux';
import { middlewares } from './middlewares';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { uiReducer } from './uiSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
  });

export const store = setupStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
