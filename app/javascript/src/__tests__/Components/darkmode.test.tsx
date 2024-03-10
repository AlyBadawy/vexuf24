import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider } from '../../components/darkMode/DarkModeProvider';
import { ufRender } from '@/__tests__/testUtils';
import { DarkModeSelector } from '../../components/darkMode/DarkModeSelector';
import { DarkModeToggler } from '../../components/darkMode/DarkModeToggler';
import * as uiSlice from '@/store/uiSlice';

describe('DarkMode', () => {
  describe('DarkModeProvider', () => {
    it('renders without crashing', () => {
      ufRender(<DarkModeProvider />);
      const provider = screen.queryByTestId('dark-mode-provider');
      expect(provider).not.toBeInTheDocument();
    });
  });

  describe('DarkModeSelector', () => {
    it('renders without crashing', () => {
      ufRender(<DarkModeSelector />);
      const trigger = screen.queryByTestId('dark-mode-selector-trigger');
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('DarkModeToggler', () => {
    it('renders without crashing', () => {
      ufRender(<DarkModeToggler />);
      const provider = screen.queryByTestId('dark-mode-toggler');
      expect(provider).toBeInTheDocument();
    });

    it('toggles the dark mode', () => {
      const darkModeSpy = jest.spyOn(uiSlice, 'setDarkMode');
      ufRender(<DarkModeToggler />);
      const toggler = screen.queryByTestId('dark-mode-toggler');
      fireEvent.click(toggler!);
      expect(darkModeSpy).toHaveBeenCalledWith(false);
      fireEvent.click(toggler!);
      expect(darkModeSpy).toHaveBeenCalledWith(true);
    });
  });
});
