import React from 'react';
import { ComponentLoader } from './ComponentLoader';
import { Layout } from './Layout';
import NotFound from './NotFound';
import OfflineApp from './OfflineApp';
import {
  AdminRoute,
  AppRoute,
  GuestRoute,
  PatientRoute,
  PrivateRoute,
  TherapistRoute,
} from './RouteSwitchers';

export const OnlineRouterConfig = [
  {
    path: 'app',
    element: <Layout />,
    errorElement: <ComponentLoader component={<NotFound />} />,
    children: [
      {
        path: 'guest',
        element: <GuestRoute />,
        children: [{ path: '*', element: <p>Guest App Route</p> }],
      },
      {
        path: '*',
        Element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <AppRoute />,
          },
          {
            path: 'roles',
            element: <PrivateRoute />,
            children: [{ index: true, element: <p>Roles App Route</p> }],
          },
          {
            path: 'admin',
            element: <AdminRoute />,
            children: [{ index: true, element: <p>Admin App Route</p> }],
          },
          {
            path: 'therapist',
            element: <TherapistRoute />,
            children: [{ index: true, element: <p>Therapist App Route</p> }],
          },
          {
            path: 'patient',
            element: <PatientRoute />,
            children: [{ index: true, element: <p>Patient App Route</p> }],
          },
        ],
      },
    ],
  },
];

export const OfflineRouterConfig = [
  {
    path: '/app',
    element: <Layout />,
    children: [
      { index: true, element: <ComponentLoader component={<OfflineApp />} /> },
      { path: '*', element: <ComponentLoader component={<OfflineApp />} /> },
    ],
  },
];
