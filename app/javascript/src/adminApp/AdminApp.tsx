import React from 'react';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

export const AdminApp = () => {
  return (
    <Provider store={store}>
      <div>AdminApp</div>
    </Provider>
  );
};
