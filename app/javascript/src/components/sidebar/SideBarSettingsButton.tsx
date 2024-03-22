import React from 'react';
import { MySettingsButton } from '@/apps/shared/mySettings/MySettingsButton';
import { DialogDrawerWrapper } from '../ui/DialogDrawerWrapper';
import { MySettingsForm } from '@/apps/shared/mySettings/MySettingsForm';

export const SideBarSettingsButton = () => {
  return (
    <DialogDrawerWrapper title='Settings' trigger={MySettingsButton()}>
      <MySettingsForm />
    </DialogDrawerWrapper>
  );
};
