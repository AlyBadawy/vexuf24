'use client';

import * as React from 'react';

import { cn } from '@/lib/shadcn-utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Roles } from '@/types/Role';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useRoles } from '@/hooks/useAccount';
import { setCurrentRole } from '@/store/uiSlice';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '@/hooks/useLayout';

export const RoleSwitcher = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const roles = useRoles();

  const isCollapsed = useLayout()?.sideBarCollapsed;

  const currentRole = useAppSelector(
    (state) => state.ui.currentRole,
    (a, b) => a === b
  );

  const handleRoleChange = (role: Roles) => {
    dispatch(setCurrentRole(role));
    if (role) {
      navigate(`/app/${role?.toLowerCase()}`);
    }
  };

  const RoleIcon = ({ roleIcon }: { roleIcon?: string }) => {
    return roleIcon ? (
      <img
        src={roleIcon}
        alt='role'
        className='h-6 w-6 rounded-full border-gray-500 border-2'
      />
    ) : null;
  };

  return (
    <div
      className={cn(
        isCollapsed ? '' : 'w-full',
        'flex flex-col gap-2 p-2 items-center'
      )}
    >
      <Select defaultValue={currentRole} onValueChange={handleRoleChange}>
        <SelectTrigger
          className={cn(
            'flex items-center mx-auto gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
            isCollapsed &&
              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
          )}
          aria-label='Select Role'
        >
          <SelectValue placeholder='Select a role'>
            <RoleIcon
              roleIcon={roles.find((role) => role.name === currentRole)?.icon}
            />
            <span className={cn('ml-2', isCollapsed && 'hidden')}>
              {roles.find((role) => role.name === currentRole)?.name}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem key={role.id} value={role.name}>
              <div className='flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground'>
                <RoleIcon roleIcon={role.icon} />
                {role.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
