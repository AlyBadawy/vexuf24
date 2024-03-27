/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const ErrorFallback = ({ error }: { error?: Error }) => {
  return (
    <div className='w-100 h-[calc(100dvh)] bg-rose-400 dark:bg-red-800 pt-8 md:pt-16 lg:pt-32'>
      <div className='container'>
        <div className='flex flex-column md:flex-row'>
          <div className='flex-1'>
            <div className='flex flex-col gap-8 md:gap-24'>
              <div className=''>
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
                <p className='mt-4'>Error code: 418</p>
                <p className='mt-4'>
                  <a href='/' className='decoration-lime-600 underline'>
                    Back to home
                  </a>
                </p>
              </div>

              {error && (
                <div>
                  <h4 className='text-2xl'>Error: </h4>
                  <div className='my-4 w-100 rounded-sm p-2 bg-blue-300/30'>
                    <code className=''>{error.message}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='flex-1 mt-4'>
            <img
              src='/error-500.svg'
              alt='Error'
              className='w-100 max-h-96 mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
