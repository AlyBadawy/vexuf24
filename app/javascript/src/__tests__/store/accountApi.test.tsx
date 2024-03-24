import { AccountApi, useGetAccountQuery } from '@/store/AccountApi';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

describe('AccountApi', () => {
  it('has endpoints for fetching, updating, and signing off` accounts', () => {
    const endpoints = AccountApi.endpoints;
    expect(endpoints.getAccount).toBeDefined();
    expect(endpoints.updateAccount).toBeDefined();
    expect(endpoints.signOutAccount).toBeDefined();
  });

  describe('useGetAccountQuery', () => {
    it('fetches account data when authorized', async () => {
      const store = configureStore({
        reducer: { [AccountApi.reducerPath]: AccountApi.reducer },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(AccountApi.middleware),
      });

      const wrapper = ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useGetAccountQuery(), {
        wrapper,
      });

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

      expect(result.current.data).toEqual({
        id: '1',
        firstName: 'Test Account',
      });

      jest.clearAllMocks();
    });
  });
});
