import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setDarkMode } from '@/store/uiSlice';

export const DarkModeSelector = () => {
  const dispatch = useAppDispatch();

  const currentMode = useAppSelector((state) =>
    state.ui.isDarkMode ? 'dark' : 'light'
  );

  const handleModeChange = (mode: 'dark' | 'light') => {
    dispatch(setDarkMode(mode === 'dark'));
  };

  return (
    <Select onValueChange={handleModeChange} defaultValue={currentMode}>
      <SelectTrigger
        className='w-[180px]'
        data-testid='dark-mode-selector-trigger'
      >
        <SelectValue placeholder='Select a theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup data-testid='dark-mode-selector'>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem data-testid='dark-mode-selector-option-dark' value='dark'>
            Dark
          </SelectItem>
          <SelectItem
            data-testid='dark-mode-selector-option-light'
            value='light'
          >
            Light
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
