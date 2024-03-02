import React from 'react';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

export const DashboardApp = () => {
  return (
    <Provider store={store}>
      <div>DashboardApp</div>{' '}
    </Provider>
  );
};
