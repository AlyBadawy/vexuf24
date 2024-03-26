import React from 'react';

export const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full flex-1'>
      <div className='flex flex-col justify-center items-center space-x-1 text-sm gap-4'>
        <img
          src='/images/uf.512.png'
          alt='VexUF Logo'
          className='h-8 opacity-50 animate-bounce'
        />
        <div className='animate-pulse'>Loading...</div>
      </div>
    </div>
  );
};
