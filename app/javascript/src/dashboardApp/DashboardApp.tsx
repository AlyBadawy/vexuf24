import React from 'react';
import { store, persistor } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DarkModeProvider } from '@/components/darkMode/DarkModeProvider';

export const DashboardApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeProvider />
        <div>DashboardApp</div>
      </PersistGate>
    </Provider>
  );
};
