import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setDarkMode } from '@/store/uiSlice';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggler = () => {
  const dispatch = useAppDispatch();

  const currentMode = useAppSelector(
    (state) => (state.ui.isDarkMode ? 'dark' : 'light'),
    (prev, next) => prev === next
  );

  const toggleDarkMode = () => {
    dispatch(setDarkMode(currentMode === 'light'));
  };

  return (
    <div className='fixed right-1 bottom-32 z-50'>
      <Button
        onClick={toggleDarkMode}
        data-testid='dark-mode-toggler'
        aria-label={`Set theme to ${currentMode === 'dark' ? 'light' : 'dark'}`}
      >
        {currentMode === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
