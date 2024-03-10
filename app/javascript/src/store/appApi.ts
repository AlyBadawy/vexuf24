import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { removeAccount } from './AccountSlice';
import { toast } from 'react-toastify';

const CSRFToken = () => {
  const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');
  return token;
};

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const token = CSRFToken();
    if (token) {
      headers.set('X-CSRF-Token', token);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    api.dispatch(removeAccount());
    toast.error('You have been signed out', { toastId: 'signedOut' });
  }
  if (result?.error?.status === 403) {
    toast.error('You do not have access to this resource', {
      toastId: 'AccessDenied',
    });
  }
  if (
    result.error?.status === 500 ||
    result.error?.status === 'PARSING_ERROR'
  ) {
    toast.error('There was an error with the server; please try again later', {
      toastId: 'serverError',
    });
  }
  if (
    result.error?.status === 'TIMEOUT_ERROR' ||
    result.error?.status === 'FETCH_ERROR'
  ) {
    toast.error(
      'You seem to be disconnected from the Internet; please try again later',
      {
        toastId: 'fetchError',
      }
    );
  }

  return result;
};

export const appApi = createApi({
  baseQuery: baseQueryWithAuth,
  endpoints: (_builder) => ({}),
});
