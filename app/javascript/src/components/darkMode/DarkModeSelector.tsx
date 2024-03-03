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
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='light'>Light</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
