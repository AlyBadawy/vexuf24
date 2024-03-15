import React from 'react';
import { AppWrapper } from '../Layout';

export const TherapistApp = () => {
  const Left = () => <div>Left</div>;
  const Right = () => <div>Right</div>;

  return <AppWrapper left={<Left />} right={<Right />} />;
};
