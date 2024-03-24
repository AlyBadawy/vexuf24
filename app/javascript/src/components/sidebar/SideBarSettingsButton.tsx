import React from 'react';
import { DialogDrawerWrapper } from '../ui/DialogDrawerWrapper';
import { MySettingsForm } from '@/apps/shared/mySettings/MySettingsForm';
import { MySettingsButton } from '@/apps/shared/mySettings/MySettingsButton';

export const SideBarSettingsButton = () => {
  return (
    <DialogDrawerWrapper title='Settings' trigger={MySettingsButton()}>
      <MySettingsForm />
    </DialogDrawerWrapper>
  );
};
