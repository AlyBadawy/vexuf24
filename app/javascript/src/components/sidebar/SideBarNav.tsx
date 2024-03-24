import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/shadcn-utils';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentModule } from '@/store/uiSlice';
import { Roles } from '@/types/Role';
import {
  DashboardIcon,
  PersonIcon,
  ChatBubbleIcon,
  MixerHorizontalIcon,
} from '@radix-ui/react-icons';
import { useLayout } from '@/hooks/useLayout';

type SideNavItem = {
  module: string;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SideBarNav({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const dispatch = useAppDispatch();
  const currentRole = useAppSelector((state) => state.ui.currentRole);
  const currentModule = useAppSelector((state) => state.ui.currentModule);

  const sideBarCollapsed = useLayout()?.sideBarCollapsed;

  const AdminItems: SideNavItem[] = [
    { module: 'dashboard', title: 'Dashboard', icon: () => <DashboardIcon /> },
    { module: 'accounts', title: 'Accounts', icon: () => <PersonIcon /> },
    { module: 'messages', title: 'Messages', icon: () => <ChatBubbleIcon /> },
    {
      module: 'settings',
      title: 'Settings',
      icon: () => <MixerHorizontalIcon />,
    },
  ];
  const TherapistItems: SideNavItem[] = [];
  const PatientItems: SideNavItem[] = [];

  let items: SideNavItem[];
  switch (currentRole) {
    case Roles.Admin:
      items = AdminItems;
      break;
    case Roles.Therapist:
      items = TherapistItems;
      break;
    case Roles.Patient:
      items = PatientItems;
      break;
    default:
      items = [];
  }

  return (
    <section
      data-testid='sidebar-nav'
      className={cn(
        sideBarCollapsed ? '' : 'w-full',
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
            sideBarCollapsed
              ? 'justify-center py-2 px-3'
              : 'justify-start w-full'
          )}
          onClick={() => dispatch(setCurrentModule(item.module))}
          aria-label={`Select ${item.title} module`}
        >
          <item.icon />
          {!sideBarCollapsed && <span className='ml-2'>{item.title}</span>}
        </Button>
      ))}
    </section>
  );
}
