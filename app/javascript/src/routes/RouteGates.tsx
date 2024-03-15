import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentRole, unSetCurrentRole } from '@/store/uiSlice';
import { Roles } from '@/types/Role';
import { isEqual } from 'lodash';
import * as React from 'react';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const GuestRoute = () => {
  const dispatch = useAppDispatch();
  const roles = useAppSelector(
    (state) => state.account.current?.roles || [],
    (a, b) => isEqual(a, b)
  );

  useEffect(() => {
    if (roles.length > 0) {
      dispatch(unSetCurrentRole());
    }
  }, [dispatch, roles]);

  const location = useLocation();
  return roles.length > 0 ? (
    <Navigate to='/app' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const PrivateRoute = () => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(
    (state) =>
      !!state.account.current?.roles && state.account.current.roles.length > 0
  );
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to='/app/guest' state={{ from: location }} replace />;
};

export const AppRoute = () => {
  const hasRoles = useAppSelector(
    (state) =>
      !!state.account.current?.roles && state.account.current.roles.length > 0
  );
  const location = useLocation();
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

  useEffect(() => {
    if (isAdmin) {
      dispatch(setCurrentRole(Roles.Admin));
    }
  }, [dispatch, isAdmin]);

  if (isAdmin) {
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

  useEffect(() => {
    if (isTherapist) {
      dispatch(setCurrentRole(Roles.Therapist));
    }
  }, [dispatch, isTherapist]);

  if (isTherapist) {
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

  useEffect(() => {
    if (isPatient) {
      dispatch(setCurrentRole(Roles.Patient));
    }
  }, [dispatch, isPatient]);

  if (isPatient) {
    return <Outlet />;
  }
  return <Navigate to='/app' state={{ from: location }} replace />;
};
