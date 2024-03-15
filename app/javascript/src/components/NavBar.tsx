import React from 'react';

export const NavBar = () => {
  return (
    <nav className='flex items-center justify-between p-2 px-6 mb-4 bg-gray-900/10 dark:bg-gray-200/5'>
      <div>
        <a href='/'>
          <img src='/logo.svg' className='h-10' />
        </a>
      </div>
      <div>
        <a href='/about' className='text-primary-500'>
          About
        </a>
        <a href='/contact' className='text-primary-500 ml-4'>
          Help
        </a>
      </div>
    </nav>
  );
};
