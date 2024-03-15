import { useGetAccountQuery } from '@/store/AccountApi';
import { removeAccount, setAccount } from '@/store/AccountSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Roles } from '@/types/Role';
import { isEqual } from 'lodash';
import { useEffect } from 'react';

export const useAccount = () => {
  const { currentData, isSuccess, error } = useGetAccountQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess && currentData) {
      dispatch(setAccount(currentData));
    } else if (error) {
      dispatch(removeAccount());
    }
  }, [currentData, error, dispatch, isSuccess]);
};

export const useRoles = () => {
  useAccount();
  const roles = useAppSelector(
    (state) => state.account.current?.roles || [],
    (a, b) => isEqual(a, b)
  );
  return [...roles].sort((a, b) => a.position - b.position);
};

export const useIsAdmin = () => {
  const roles = useRoles();
  return roles.map((r) => r.name).includes(Roles.Admin);
};

export const useIsTherapist = () => {
  const roles = useRoles();
  return roles.map((r) => r.name).includes(Roles.Therapist);
};

export const useIsPatient = () => {
  const roles = useRoles();
  return roles.map((r) => r.name).includes(Roles.Patient);
};
