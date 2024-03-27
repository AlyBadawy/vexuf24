import { useRoles } from '@/hooks/useAccount';
import { useSignOutAccountMutation } from '@/store/AccountApi';
import { removeAccount } from '@/store/AccountSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';

export const Footer = () => {
  const account = useAppSelector((state) => state.account.current);
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutAccountMutation();

  const roles = useRoles()
    .map((role) => role.name)
    .join(', ');

  const handleLogout = () => {
    void signOut().then(() => {
      dispatch(removeAccount());
    });
  };

  return (
    <footer className='w-full max-h-8 bg-primary/5 border-t border-primary/20 text-gray-500 text-xs'>
      <div className='py-1 px-4'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <div className='border-rig'>
              {account ? ( // If user is logged in, show the user's name
                <div>
                  <div className='text-gray-400 text-xs'>
                    {account.firstName} {account.lastName}{' '}
                    {`[Roles: ${roles ? roles : 'No Roles'}]`} (
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
