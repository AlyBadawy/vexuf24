import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/shadcn-utils';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentModule } from '@/store/uiSlice';
import { DashboardIcon } from '@radix-ui/react-icons';
import { useSideBarCollapsed } from '@/hooks/useLayout';
import { Modules } from '@/types/Modules';

type SideNavItem = {
  module: Modules;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SideBarNav({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const dispatch = useAppDispatch();
  const currentModule = useAppSelector((state) => state.ui.currentModule);

  const isSideBarCollapsed = useSideBarCollapsed();

  const AdminItems: SideNavItem[] = [
    {
      module: Modules.Dashboard,
      title: 'Dashboard',
      icon: () => <DashboardIcon />,
    },
  ];

  const items = AdminItems;

  return (
    <section
      data-testid='sidebar-nav'
      className={cn(
        isSideBarCollapsed ? '' : 'w-full',
        'flex flex-col gap-2 p-2 items-center',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.module}
          variant='ghost'
          size='lg'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            currentModule === item.module
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-gray-500/10',
            isSideBarCollapsed
              ? 'justify-center py-2 px-3'
              : 'justify-start min-w-fit w-full'
          )}
          onClick={() => dispatch(setCurrentModule(item.module))}
          aria-label={`Select ${item.title} module`}
        >
          <item.icon />
          {!isSideBarCollapsed && <span className='ml-2'>{item.title}</span>}
        </Button>
      ))}
    </section>
  );
}
