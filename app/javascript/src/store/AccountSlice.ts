import { Account } from '@/types/Account';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AccountState = {
  current?: Account;
};

const initialState: AccountState = {
  current: undefined,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account>) => {
      state.current = action.payload;
    },

    removeAccount: (state, _action: PayloadAction<void>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.current = initialState.current;
    },
  },
});

export const { setAccount, removeAccount } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
