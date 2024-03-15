// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { TheApp } from '@/apps/TheApp';
import { ThemeProvider } from '@/components/ThemeProvider';
import { persistor, store } from '@/store/store';

import 'react-toastify/dist/ReactToastify.css';

document.addEventListener('turbo:load', () => {
  const themeEl = document.getElementById('theme-provider');
  const rootEl = document.getElementById('react-app-root');

  if (themeEl && rootEl) {
    throw new Error('Cannot have both theme and root elements');
  }

  const root = createRoot(rootEl ? rootEl : themeEl!);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {rootEl ? <TheApp /> : <ThemeProvider />}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
});
