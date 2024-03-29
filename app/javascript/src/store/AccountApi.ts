import { Account } from '../types/Account';
import { appApi } from './appApi';

const apiWithTag = appApi.enhanceEndpoints({ addTagTypes: ['Account'] });

export const AccountApi = apiWithTag.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<Account, void>({
      query: () => '/accounts/me',
      keepUnusedDataFor: 10,
      providesTags: ['Account'],
    }),

    signOutAccount: build.mutation<void, void>({
      query: () => ({
        url: '/accounts/sign_me_out',
        method: 'DELETE',
      }),
      invalidatesTags: ['Account'],
    }),

    updateAccount: build.mutation<void, Account>({
      query: (account: Account) => ({
        url: '/accounts',
        method: 'update',
        body: account,
      }),
      invalidatesTags: ['Account'],
    }),
  }),
});

export const {
  useGetAccountQuery,
  useSignOutAccountMutation,
  useUpdateAccountMutation,
} = AccountApi;
