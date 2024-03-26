import React from 'react';
import { DialogDrawerWrapper } from '../ui/DialogDrawerWrapper';
import { MyAccountButton } from '@/components/myAccount/MyAccountButton';
import { MyAccountForm } from '@/components/myAccount/MyAccountForm';

export const SideBarAccountButton = () => {
  return (
    <DialogDrawerWrapper title='Account' trigger={MyAccountButton()}>
      <MyAccountForm />
    </DialogDrawerWrapper>
  );
};
