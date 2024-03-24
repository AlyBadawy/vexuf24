import { accountSlice, AccountState } from '@/store/AccountSlice';
import { Account } from '@/types/Account';

describe('accountSlice', () => {
  let initialState: AccountState;

  beforeEach(() => {
    initialState = {
      current: undefined,
    };
  });

  it('should handle setAccount', () => {
    const account: Account = { id: '1', firstName: 'Test Account' };
    const actual = accountSlice.reducer(
      initialState,
      accountSlice.actions.setAccount(account)
    );
    expect(actual.current).toEqual(account);
  });

  it('should handle removeAccount', () => {
    const account: Account = { id: '1', firstName: 'Test Account' };
    initialState.current = account;
    const actual = accountSlice.reducer(
      initialState,
      accountSlice.actions.removeAccount()
    );
    expect(actual.current).toBeUndefined();
  });
});
