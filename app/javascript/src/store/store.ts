import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getMiddlewares } from './middlewares';
import { accountReducer } from './AccountSlice';
import { uiReducer } from './uiSlice';
import { appApi } from './appApi';
import { persistanceMigrations } from './persistanceMigrations';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api'],
  throttle: 2500,
  version: 1,
  migrate: createMigrate(persistanceMigrations, { debug: false }),
};

export const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  ui: uiReducer,
  account: accountReducer,
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
      }).concat(getMiddlewares()),
  });

export const store = setupStore();
export const persistor = persistStore(store, {});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
