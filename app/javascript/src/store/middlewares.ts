import { createLogger } from 'redux-logger';
import { Middleware } from '@reduxjs/toolkit';
import { appApi } from './appApi';

export const getMiddlewares = () => {
  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
      duration: true,
      timestamp: true,
    });
    middlewares.push(logger);
  }

  middlewares.push(appApi.middleware);

  return middlewares;
};
