import React from 'react';
import { DialogDrawerWrapper } from '../ui/DialogDrawerWrapper';
import { MySettingsForm } from '@/components/mySettings/MySettingsForm';
import { MySettingsButton } from '@/components/mySettings/MySettingsButton';

export const SideBarSettingsButton = () => {
  return (
    <DialogDrawerWrapper title='Settings' trigger={MySettingsButton()}>
      <MySettingsForm />
    </DialogDrawerWrapper>
  );
};
