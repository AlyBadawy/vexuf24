import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentRole, unSetCurrentRole } from '@/store/uiSlice';
import { Roles } from '@/types/Role';
import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const GuestRoute = () => {
  const dispatch = useAppDispatch();
  const roles = useAppSelector((state) => state.account.current?.roles || []);
  const location = useLocation();
  dispatch(unSetCurrentRole());
  return roles.length > 0 ? (
    <Navigate to='/app' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const PrivateRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLoggedIn = useAppSelector(
    (state) =>
      !!state.account.current?.roles && state.account.current.roles.length > 0
  );
  if (isLoggedIn) {
    dispatch(unSetCurrentRole());
    return <Outlet />;
  }
  return <Navigate to='/app/guest' state={{ from: location }} replace />;
};

export const AppRoute = () => {
  const dispatch = useAppDispatch();
  const hasRoles = useAppSelector(
    (state) =>
      !!state.account.current?.roles && state.account.current.roles.length > 0
  );
  const location = useLocation();
  dispatch(unSetCurrentRole());
  return hasRoles ? (
    <Navigate to='/app/roles' state={{ from: location }} replace />
  ) : (
    <Navigate to='/app/guest' state={{ from: location }} replace />
  );
};

export const AdminRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isAdmin = useAppSelector(
    (state) =>
      !!state.account.current?.roles
        ?.map((role) => role.name)
        .includes(Roles.Admin)
  );
  if (isAdmin) {
    dispatch(setCurrentRole(Roles.Admin));
    return <Outlet />;
  }
  return <Navigate to='/app' state={{ from: location }} replace />;
};

export const TherapistRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isTherapist = useAppSelector(
    (state) =>
      !!state.account.current?.roles
        ?.map((role) => role.name)
        .includes(Roles.Therapist)
  );

  if (isTherapist) {
    dispatch(setCurrentRole(Roles.Therapist));
    return <Outlet />;
  }
  return <Navigate to='/app' state={{ from: location }} replace />;
};

export const PatientRoute = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPatient = useAppSelector(
    (state) =>
      !!state.account.current?.roles
        ?.map((role) => role.name)
        .includes(Roles.Patient)
  );

  if (isPatient) {
    dispatch(setCurrentRole(Roles.Patient));
    return <Outlet />;
  }
  return <Navigate to='/app' state={{ from: location }} replace />;
};
