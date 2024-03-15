import React from 'react';
import { RoleSwitcher } from './RoleSwitcher';
import { useAppSelector } from '@/store/store';
import { cn } from '@/lib/shadcn-utils';
import { Separator } from '../ui/separator';

export const Sidebar = () => {
  const isCollapsed = useAppSelector((state) => state.ui.isSideBarCollapsed);
  return (
    <>
      <div
        className={cn(
          isCollapsed ? '' : 'w-f',
          'flex flex-col gap-2 p-2 items-center'
        )}
      >
        <RoleSwitcher isCollapsed={isCollapsed} />
      </div>
      <Separator />
    </>
  );
};
