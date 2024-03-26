import React from 'react';
import { render, renderHook } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RootState, rootReducer } from '@/store/store';
import { appApi } from '@/store/appApi';
import { Roles } from '@/types/Role';
import { Modules } from '@/types/Modules';
import { LayOut } from '@/types/Layout';

// As a basic setup, import your same slice reducers

export const ufRender = (
  ui: React.ReactElement,
  flippers?: Record<string, boolean>,
  preloadedState?: Partial<RootState>
) => {
  const initialState: Partial<RootState> = {
    ui: {
      isDarkMode: true,
      currentModule: Modules.Dashboard,
      layOutSizes: [3, 40, 57],
      layout: LayOut.DEFAULT,
    },
    account: {
      current: {
        id: '1',
        roles: [{ id: '1', name: Roles.Admin, position: 1 }],
      },
    },
  };

  const combinedState = { ...initialState, ...preloadedState };
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: combinedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(appApi.middleware),
  });
  if (flippers) {
    window.FLIPPERS = flippers;
  }
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
};

export const ufRenderWithoutRouter = (
  ui: React.ReactElement,
  flippers?: Record<string, boolean>,
  preloadedState?: Partial<RootState>
) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(appApi.middleware),
  });
  if (flippers) {
    window.FLIPPERS = flippers;
  }
  return render(<Provider store={store}>{ui}</Provider>);
};

export const ufRenderHook = (hook: (initialProps: unknown) => unknown) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(appApi.middleware),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper = (ui: any) => <Provider store={store}>{ui}</Provider>;
  return renderHook(hook, { wrapper });
};
