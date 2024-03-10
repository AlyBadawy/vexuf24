import {
  useIsAdmin,
  useIsPatient,
  useIsTherapist,
  useRoles,
} from '@/hooks/useAccount';
import { useAppSelector } from '@/store/store';
import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const GuestRoute = () => {
  const roles = useRoles();
  const location = useLocation();
  return roles.length > 0 ? (
    <Navigate to='/app' state={{ from: location }} replace />
  ) : (
    <>
      <p>Guest: </p>
      <Outlet />
    </>
  );
};

export const PrivateRoute = () => {
  const isLoggedIn = useAppSelector(
    (state) => !!state.account.current && state.account.current.roles.length > 0
  );
  const location = useLocation();
  return isLoggedIn ? (
    <>
      <p>Private: </p>
      <Outlet />
    </>
  ) : (
    <Navigate to='/app/guest' state={{ from: location }} replace />
  );
};

export const RolesRoute = () => {
  const hasRoles = useAppSelector(
    (state) => !!state.account.current && state.account.current.roles.length > 0
  );
  const location = useLocation();
  return hasRoles ? (
    <Navigate to='/app/roles' state={{ from: location }} replace />
  ) : (
    <Navigate to='/app/guest' state={{ from: location }} replace />
  );
};

export const AdminRoute = () => {
  const isAdmin = useIsAdmin();

  const location = useLocation();
  return isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to='/app' state={{ from: location }} replace />
  );
};

export const TherapistRoute = () => {
  const isTherapist = useIsTherapist();

  const location = useLocation();
  return isTherapist ? (
    <Outlet />
  ) : (
    <Navigate to='/app' state={{ from: location }} replace />
  );
};

export const PatientRoute = () => {
  const isPatient = useIsPatient();

  const location = useLocation();
  return isPatient ? (
    <Outlet />
  ) : (
    <Navigate to='/app' state={{ from: location }} replace />
  );
};
