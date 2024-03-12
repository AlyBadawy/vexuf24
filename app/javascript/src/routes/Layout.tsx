import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className='' id='layout-main'>
        <main className='flex flex-col flex-1 mb-8'>
          <NavBar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
