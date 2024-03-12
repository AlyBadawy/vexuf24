import { useSignOutAccountMutation } from '@/store/AccountApi';
import { removeAccount } from '@/store/AccountSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';

export const Footer = () => {
  const account = useAppSelector((state) => state.account.current);
  const currentRole = useAppSelector((state) => state.ui.currentRole);
  const dispatch = useAppDispatch();

  const [signOut] = useSignOutAccountMutation();

  const handleLogout = () => {
    void signOut().then(() => {
      dispatch(removeAccount());
    });
  };

  return (
    <footer className='bg-gray-950 border-t-2 border-gray-900 text-gray-400 text-xs mt-2 fixed bottom-0 w-full max-h-8'>
      <div className='container mx-auto py-1 px-4'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <div className='border-rig'>
              {account ? ( // If user is logged in, show the user's name
                <div>
                  <div className='text-gray-400 text-xs'>
                    {account.firstName} {account.lastName}{' '}
                    {currentRole && `[${currentRole}]`} (
                    <button type='button' onClick={handleLogout}>
                      Logout
                    </button>
                    )
                  </div>
                </div>
              ) : (
                <>
                  <span>
                    No account - (
                    <button
                      type='button'
                      onClick={() => {
                        window.location.href = '/accounts/sign_in';
                      }}
                    >
                      Login
                    </button>
                    )
                  </span>
                </>
              )}
            </div>
          </div>
          <div>© 2024 VexUF.com</div>
        </div>
      </div>
    </footer>
  );
};
