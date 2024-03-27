import { ToastyProvider } from '@/components/providers/ToastyProvider';
import { DarkModeProvider } from '@/components/darkMode/DarkModeProvider';
import { DarkModeToggler } from '@/components/darkMode/DarkModeToggler';
import React from 'react';

export const ThemeProvider = ({
  showThemeToggler,
}: {
  showThemeToggler: boolean;
}) => {
  return (
    <>
      <DarkModeProvider />
      {showThemeToggler && <DarkModeToggler />}
      <ToastyProvider />
    </>
  );
};
