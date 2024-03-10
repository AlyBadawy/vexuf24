import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen' id='layout-main'>
        <main className='flex flex-col flex-1'>
          <Outlet />
        </main>
      </div>
    </>
  );
};
