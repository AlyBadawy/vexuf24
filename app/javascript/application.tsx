// Entry point for the build script in your package.json
import { DarkModeProvider } from '@/components/darkMode/DarkModeProvider';
import { DarkModeToggler } from '@/components/darkMode/DarkModeToggler';
import { persistor, store } from '@/store/store';
import '@hotwired/turbo-rails';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

document.addEventListener('turbo:load', () => {
  const rootEl = document.getElementById('theme-provider');
  const root = createRoot(rootEl!);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DarkModeProvider />
          <DarkModeToggler />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
});
