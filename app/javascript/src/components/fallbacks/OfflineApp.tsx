import React from 'react';

export const OfflineApp = () => {
  return (
    <div
      className='mx-5 m-auto flex flex-col space-y-6 md:w-1/2 md:mx-auto'
      data-testid='offline-app-layout'
    >
      <h1 className='text-3xl font-bold align-middle md:text-5xl'>
        Vexuf is offline!
      </h1>
      <p>
        We apologize for the inconvenience, but Vexuf is currently offline for
        maintenance. Our team is working hard to bring the application back
        online as soon as possible, with all features fully operational. We
        appreciate your patience during this time and encourage you to check
        back soon. If you have any questions or concerns, please feel free to
        contact us at support@vexuf.com. Thank you for your understanding!
      </p>
    </div>
  );
};
