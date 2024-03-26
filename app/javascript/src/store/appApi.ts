import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { removeAccount } from './AccountSlice';
import { toast } from 'react-toastify';

export const CSRFToken = () => {
  const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');
  return token;
};
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers: Headers) => {
    const token = CSRFToken();
    if (token) {
      headers.set('X-CSRF-Token', token);
    }
    return headers;
  },
});

const vexUfBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  // convert the args to snake_case
  if (typeof args === 'object' && args.body) {
    args.body = JSON.stringify(
      JSON.parse(
        JSON.stringify(args.body).replace(
          /(\w)([A-Z])/g,
          (m) => `${m[0]}_${m[1].toLowerCase()}`
        )
      )
    );
  }

  const result = await baseQuery(args, api, extraOptions);

  // convert the result to camelCase
  if (result.data) {
    result.data = JSON.parse(
      JSON.stringify(result.data).replace(/_(\w)/g, (m) => m[1].toUpperCase())
    );
  }

  if (result?.error?.status === 301) {
    api.dispatch(removeAccount());
    toast.error('You have been signed out', { toastId: 'signedOut' });
  }
  if (result?.error?.status === 303) {
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
  baseQuery: vexUfBaseQuery,
  endpoints: (_builder) => ({}),
});
