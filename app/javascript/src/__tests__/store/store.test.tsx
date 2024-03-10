import { configureStore } from '@reduxjs/toolkit';
import { setAccount } from '../../store/AccountSlice';
import { rootReducer } from '../../store/store';

describe('store', () => {
  it('updates state correctly when actions are dispatched', () => {
    const store = configureStore({ reducer: rootReducer });

    // Dispatch an action to update the account
    store.dispatch(
      setAccount({
        id: '1',
        email: 'test@testing.com',
        firstName: 'Test',
        lastName: 'Testing',
        avatar: 'test.png',
        roles: [],
      })
    );
    expect(store.getState().account.current?.id).toBe('1');
    expect(store.getState().account.current?.email).toBe('test@testing.com');
    expect(store.getState().account.current?.roles).toEqual([]);
  });
});
