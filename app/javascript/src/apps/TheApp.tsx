import React from 'react';
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppOutlet } from '@/apps/Layout';
import { RolesApp } from '@/apps/RolesApp';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AccountProvider } from '@/components/AccountProvider';
import { ErrorBoundary } from '@/components/errorBoundary/ErrorBoundary';
import { ErrorFallback } from '@/components/errorBoundary/ErrorFallback';
import { useWindowFlipper } from '@/hooks/useWindow';
import { ComponentLoader } from '@/routes/ComponentLoader';
import { NotFound } from '@/routes/NotFound';
import { OfflineApp } from '@/routes/OfflineApp';
import {
  AdminRoute,
  AppRoute,
  GuestRoute,
  PatientRoute,
  PrivateRoute,
  TherapistRoute,
} from '@/routes/RouteGates';
import { TherapistApp } from './therapist/TherapistApp';
import { PatientApp } from './patient/PatientApp';
import { AdminApp } from './admin/AdminApp';

const OnlineRouterConfig: RouteObject[] = [
  {
    path: 'app',
    element: <AppOutlet />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: 'guest',
        element: <GuestRoute />,
        children: [{ path: '*', element: <p>Guest App Route</p> }],
      },
      {
        path: '*',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <AppRoute />,
          },
          {
            path: 'roles',
            element: <PrivateRoute />,
            children: [{ index: true, element: <RolesApp /> }],
          },
          {
            path: 'admin',
            element: <AdminRoute />,
            children: [{ index: true, element: <AdminApp /> }],
          },
          {
            path: 'therapist',
            element: <TherapistRoute />,
            children: [{ index: true, element: <TherapistApp /> }],
          },
          {
            path: 'patient',
            element: <PatientRoute />,
            children: [{ index: true, element: <PatientApp /> }],
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];

const OfflineRouterConfig = [
  {
    path: '/app',
    element: <Outlet />,
    children: [
      { index: true, element: <ComponentLoader component={<OfflineApp />} /> },
      { path: '*', element: <ComponentLoader component={<OfflineApp />} /> },
    ],
  },
];

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
