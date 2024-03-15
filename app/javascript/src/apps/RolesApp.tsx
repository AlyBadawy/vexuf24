import React from 'react';
import { useRoles } from '@/hooks/useAccount';
import { Navigate, useLocation } from 'react-router-dom';
import { AppWrapper } from './Layout';

export const RolesApp = () => {
  const roles = useRoles();
  const location = useLocation();

  if (roles.length > 0) {
    return (
      <Navigate
        to={`/app/${roles[0].name.toLowerCase()}`}
        state={{ from: location }}
        replace
      />
    );
  }

  const Left = () => <div>Left</div>;
  const Right = () => <div>Right</div>;

  return <AppWrapper left={<Left />} right={<Right />} />;
};
