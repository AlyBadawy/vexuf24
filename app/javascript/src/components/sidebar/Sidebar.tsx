import React from 'react';
import { cn } from '@/lib/shadcn-utils';
import { useAppSelector } from '@/store/store';
import { Separator } from '../ui/separator';
import { RoleSwitcher } from './RoleSwitcher';
import { SideBarNav } from './SideBarNav';
import { LogOutButton } from './LogOutButton';
import { SideBarSettingsButton } from './SideBarSettingsButton';

export const Sidebar = () => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.ui.layOut[state.ui.currentRole!][0] === 3
  );

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <RoleSwitcher />
        <Separator />
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
          <SideBarSettingsButton />
          <LogOutButton />
        </section>
      </div>
    </div>
  );
};
