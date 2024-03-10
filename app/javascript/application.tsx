// Entry point for the build script in your package.json
import { DashboardApp } from '@/dashboardApp/DashboardApp';
import { persistor, store } from '@/store/store';
import { ThemeProvider } from '@/themeProviderApp/ThemeProvider';
import '@hotwired/turbo-rails';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

document.addEventListener('turbo:load', () => {
  const themeEl = document.getElementById('theme-provider');
  const rootEl = document.getElementById('react-app-root');

  if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <DashboardApp />
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );
  } else if (themeEl) {
    const root = createRoot(themeEl);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider />
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );
  } else {
    throw new Error('Missing required elements');
  }
});
