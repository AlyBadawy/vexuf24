import React from 'react';
import { DialogDrawerWrapper } from '../ui/DialogDrawerWrapper';
import { MyAccountButton } from '@/apps/shared/myAccount/MyAccountButton';
import { MyAccountForm } from '@/apps/shared/myAccount/MyAccountForm';

export const SideBarAccountButton = () => {
  return (
    <DialogDrawerWrapper title='Account' trigger={MyAccountButton()}>
      <MyAccountForm />
    </DialogDrawerWrapper>
  );
};
