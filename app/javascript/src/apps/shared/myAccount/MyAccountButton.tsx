import React from 'react';
import { useAppSelector } from '@/store/store';
import { cn } from '@/lib/shadcn-utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { IdCardIcon } from '@radix-ui/react-icons';

export const MyAccountButton = () => {
  const currentModule = useAppSelector((state) => state.ui.currentModule);
  const isSideBarCollapsed = useAppSelector(
    (state) => state.ui.layOut[state.ui.currentRole!][0] === 3
  );
  return (
    <Button
      variant='ghost'
      size='lg'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        currentModule === 'mySettings'
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-gray-500/10',
        isSideBarCollapsed ? 'justify-center py-2 px-3' : 'justify-start w-full'
      )}
      aria-label='Open settings page'
    >
      <IdCardIcon />
      {!isSideBarCollapsed && <span className='ml-2'>My Settings</span>}
    </Button>
  );
};
