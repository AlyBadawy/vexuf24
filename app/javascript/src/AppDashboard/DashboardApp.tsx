import { AccountProvider } from '@/components/AccountProvider';
import { DarkModeSelector } from '@/components/darkMode/DarkModeSelector';
import { ErrorBoundary } from '@/components/errorBoundry/ErrorBoundary';
import { useWindowFlipper } from '@/hooks/useWindow';
import { OfflineRouterConfig, OnlineRouterConfig } from '@/routes/RoutesConfig';
import { ThemeProvider } from '@/AppThemeProvider/ThemeProvider';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const DashboardApp = () => {
  const isOnline = useWindowFlipper('app_online');
  const OnlineRouter = createBrowserRouter(OnlineRouterConfig);
  const OfflineRouter = createBrowserRouter(OfflineRouterConfig);

  return (
    <>
      <ErrorBoundary>
        <AccountProvider />
        <ThemeProvider />
        <DarkModeSelector />
        <RouterProvider router={isOnline ? OnlineRouter : OfflineRouter} />
      </ErrorBoundary>
    </>
  );
};
