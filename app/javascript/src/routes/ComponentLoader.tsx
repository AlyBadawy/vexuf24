import React, { Suspense } from 'react';
import { Loading } from './Loading';

type Props = {
  component: React.ReactNode;
};

export const ComponentLoader = ({ component }: Props) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};
