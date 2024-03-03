// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';

import React from 'react';
import { DashboardApp } from '@/dashboardApp/DashboardApp';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/components/errorBoundry/ErrorBoundary';
import { DarkModeProvider } from '@/components/darkMode/DarkModeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';

document.addEventListener('turbo:load', () => {
  const rootEl = document.getElementById('react-dashboard-app-root');
  const root = createRoot(rootEl!);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DarkModeProvider />
          <ErrorBoundary>
            <DashboardApp />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
});
