/* eslint-disable testing-library/no-node-access */
import '@testing-library/jest-dom';

import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import fetchMock from 'fetch-mock';
import * as MediaQuery from '@/hooks/useMediaQuery';

const mockedUsedNavigate = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get('http://localhost/api/accounts/me', (req, res, ctx) => {
    return res(ctx.json({ id: '1', firstName: 'Test Account' }));
  }),
];

export const server = setupServer(...handlers);

// Enable the API mocking before tests.
beforeAll(() => {
  server.listen();

  jest.spyOn(MediaQuery, 'useMediaQuery').mockImplementation((_) => true);

  jest.mock('react-toastify', () => ({
    toast: {
      error: jest.fn(),
    },
  }));
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  fetchMock.reset();
  server.resetHandlers();
  jest.clearAllMocks();
});

// Disable the API mocking after the tests finished.
afterAll(() => server.close());
