import { Toasty } from '@/components/Toasty';
import { DarkModeProvider } from '@/components/darkMode/DarkModeProvider';
import { DarkModeToggler } from '@/components/darkMode/DarkModeToggler';
import React from 'react';

export const ThemeProvider = () => {
  return (
    <>
      <DarkModeProvider />
      <DarkModeToggler />
      <Toasty />
    </>
  );
};
