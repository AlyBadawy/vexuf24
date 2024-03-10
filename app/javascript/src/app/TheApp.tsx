import { AccountProvider } from '@/components/AccountProvider';
import { ErrorBoundary } from '@/components/errorBoundry/ErrorBoundary';
import { useWindowFlipper } from '@/hooks/useWindow';
import { OfflineRouterConfig, OnlineRouterConfig } from '@/routes/RoutesConfig';
import { ThemeProvider } from '@/app/ThemeProvider';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const TheApp = () => {
  const isOnline = useWindowFlipper('app_online');
  const OnlineRouter = createBrowserRouter(OnlineRouterConfig);
  const OfflineRouter = createBrowserRouter(OfflineRouterConfig);

  return (
    <>
      <ErrorBoundary>
        <AccountProvider />
        <ThemeProvider />
        <RouterProvider router={isOnline ? OnlineRouter : OfflineRouter} />
      </ErrorBoundary>
    </>
  );
};
