// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { TheApp } from '@/apps/TheApp';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { persistor, store } from '@/store/store';

import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from '@/apps/AppWrapper';

document.addEventListener('turbo:load', () => {
  const themeEl = document.getElementById('theme-provider');
  const rootEl = document.getElementById('react-app-root');

  // these conditionals make sure that ONLY ONE of the mounting points is present
  if (!themeEl && !rootEl) {
    throw new Error('Cannot find a mounting point for the app');
  }
  if (themeEl && rootEl) {
    throw new Error('Cannot have both theme and root mounting points');
  }

  const root = createRoot(rootEl ? rootEl : themeEl!);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {rootEl && (
            <AppWrapper>
              <TheApp />
            </AppWrapper>
          )}
          {themeEl && <ThemeProvider showThemeToggler />}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
});
