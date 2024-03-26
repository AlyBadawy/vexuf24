import React from 'react';
import { useAppSelector } from '@/store/store';
import { cn } from '@/lib/shadcn-utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { IdCardIcon } from '@radix-ui/react-icons';
import { useSideBarCollapsed } from '@/hooks/useLayout';
import { Modules } from '@/types/Modules';

export const MyAccountButton = () => {
  const currentModule = useAppSelector((state) => state.ui.currentModule);
  const isSideBarCollapsed = useSideBarCollapsed();
  return (
    <Button
      variant='ghost'
      size='lg'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        currentModule === Modules.MyAccount
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-gray-500/10',
        isSideBarCollapsed
          ? 'justify-center py-2 px-3'
          : 'justify-start min-w-fit w-full'
      )}
      aria-label='Open My Account page'
    >
      <IdCardIcon />
      {!isSideBarCollapsed && <span className='ml-2'>My Account</span>}
    </Button>
  );
};
