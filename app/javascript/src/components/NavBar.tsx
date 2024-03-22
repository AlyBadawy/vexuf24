import React from 'react';

export const NavBar = () => {
  return (
    <nav className='flex items-center justify-between p-2 px-6 mb-4 bg-gray-900/10 dark:bg-gray-200/5'>
      <div>
        <a href='/' aria-label='Go to home page'>
          <img src='/logo.svg' className='h-10' alt='VexUF Logo' />
        </a>
      </div>
      <div>
        <a
          href='/about'
          className='text-primary-500'
          aria-label='Go to About page'
        >
          About
        </a>
        <a
          href='/contact'
          className='text-primary-500 ml-4'
          aria-label='Go to Help page'
        >
          Help
        </a>
      </div>
    </nav>
  );
};
