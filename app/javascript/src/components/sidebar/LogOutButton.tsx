import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button, SpanButton, buttonVariants } from '../ui/button';
import { cn } from '@/lib/shadcn-utils';
import { ExitIcon } from '@radix-ui/react-icons';
import { useAppDispatch } from '@/store/store';
import { useSignOutAccountMutation } from '@/store/AccountApi';
import { removeAccount } from '@/store/AccountSlice';
import { useSideBarCollapsed } from '@/hooks/useLayout';

export const LogOutButton = () => {
  const isSideBarCollapsed = useSideBarCollapsed();

  const dispatch = useAppDispatch();
  const [signOut] = useSignOutAccountMutation();

  const handleLogout = () => {
    void signOut().then(() => {
      dispatch(removeAccount());
    });
  };

  return (
    <Sheet>
      <SheetTrigger className='w-full'>
        <SpanButton
          data-testid='log-out-button'
          variant='ghost'
          size='lg'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            isSideBarCollapsed
              ? 'justify-center py-2 px-0'
              : 'justify-start min-w-fit w-full',
            'hover:bg-gray-500/10 d-inline-flex gap-2'
          )}
          aria-label='Log out'
        >
          <ExitIcon />
          {!isSideBarCollapsed && <span className='ml-2'>Log out</span>}
        </SpanButton>
      </SheetTrigger>
      <SheetContent side='left' className='h-full'>
        <SheetHeader className='h-full'>
          <SheetTitle>Are you sure?</SheetTitle>
          <SheetDescription className='flex flex-col justify-between h-full'>
            <div>
              <p>
                Are you sure you want to log out? You can always log back in
                later.
              </p>
            </div>
            <div>
              <Button
                data-testid='confirm-log-out-button'
                variant='destructive'
                size='lg'
                className={cn(
                  buttonVariants({ variant: 'destructive' }),
                  'justify-start w-full d-inline-flex gap-2 mb-2'
                )}
                aria-label='Confirm Log out'
                onClick={handleLogout}
              >
                <ExitIcon />
                <span className='ml-2'>Log out</span>
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
