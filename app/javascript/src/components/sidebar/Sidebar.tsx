import React from 'react';
import { cn } from '@/lib/shadcn-utils';
import { Separator } from '../ui/separator';
import { SideBarNav } from './SideBarNav';
import { LogOutButton } from './LogOutButton';
import { SideBarAccountButton } from './SideBarAccountButton';
import { SideBarSettingsButton } from './SideBarSettingsButton';
import { useSideBarCollapsed } from '@/hooks/useLayout';

export const Sidebar = () => {
  const isSideBarCollapsed = useSideBarCollapsed();

  return (
    <div
      className='flex flex-col justify-between h-[calc(100dvh-115px)] rounded-md bg-primary/5 m-2 overflow-x-hidden'
      data-testid='sidebar'
    >
      <div>
        <SideBarNav />
        <Separator />
      </div>
      <div>
        <Separator />
        <section
          className={cn(
            isSideBarCollapsed ? '' : 'w-full',
            'flex flex-col gap-2 p-2 items-center text-xs'
          )}
        >
          <SideBarAccountButton />
          <SideBarSettingsButton />
          <LogOutButton />
        </section>
      </div>
    </div>
  );
};
