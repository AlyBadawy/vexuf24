import React from 'react';
import { ComponentLoader } from './ComponentLoader';
import NotFound from './NotFound';
import OfflineApp from './OfflineApp';
import { Layout } from './Layout';
import {
  AdminRoute,
  GuestRoute,
  PatientRoute,
  PrivateRoute,
  RolesRoute,
  TherapistRoute,
} from './PrivateRoute';

export const OnlineRouterConfig = [
  {
    path: 'app',
    element: <Layout />,
    errorElement: <ComponentLoader component={<NotFound />} />,
    children: [
      { index: true, element: <RolesRoute /> },
      {
        Element: <PrivateRoute />,
        children: [
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
            children: [{ index: true, element: <p>Pati App Route</p> }],
          },
          {
            path: 'roles',
            element: <p>select Role</p>,
          },
        ],
      },
      {
        element: <GuestRoute />,
        children: [{ path: 'guest', element: <p>Guest App Route</p> }],
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
