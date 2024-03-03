/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const ErrorFallback = ({ _error }: { _error: Error }) => {
  return (
    <div className='w-100 h-screen bg-rose-400 dark:bg-red-800 pt-8 md:pt-16 lg:pt-32'>
      <div className='container'>
        <div className='flex flex-column md:flex-row'>
          <div className='flex-1'>
            <h1 className='text-6xl font-extrabold italic'>Shoot! :'(</h1>
            <h2 className='text-4xl mt-8'>Well, this is unexpected...</h2>

            <p className='mt-8'>
              An error has occurred while running the application in your
              browser. Please try to reload this page, clear your browser
              history, or come back later.
            </p>
            <p>
              If the problem persists, please contact our support team at
              v@vexuf.com
            </p>
            <p className='mt-4'>Error code: 500</p>

            <p className='mt-4'>
              <a href='/' className='decoration-lime-600 underline'>
                Back to home
              </a>
            </p>
          </div>
          <div className='flex-1 mt-4'>
            <img src='/error-500.svg' alt='Error' className='w-100 max-h-96' />
          </div>
        </div>
      </div>
    </div>
  );
};
