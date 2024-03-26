import React from 'react';
import { useAppSelector } from '@/store/store';
import { cn } from '@/lib/shadcn-utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { GearIcon } from '@radix-ui/react-icons';
import { useSideBarCollapsed } from '@/hooks/useLayout';
import { Modules } from '@/types/Modules';

export const MySettingsButton = () => {
  const currentModule = useAppSelector((state) => state.ui.currentModule);
  const isSideBarCollapsed = useSideBarCollapsed();
  return (
    <Button
      variant='ghost'
      size='lg'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        currentModule === Modules.MySettings
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-gray-500/10',
        isSideBarCollapsed
          ? 'justify-center py-2 px-3'
          : 'justify-start min-w-fit w-full'
      )}
      aria-label='Open settings page'
    >
      <GearIcon />
      {!isSideBarCollapsed && <span className='ml-2'>My Settings</span>}
    </Button>
  );
};
